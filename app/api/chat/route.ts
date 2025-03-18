import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Get configuration from environment variables
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
const OPENAI_TEMPERATURE = parseFloat(process.env.OPENAI_TEMPERATURE || '0.7')
const OPENAI_MAX_TOKENS = parseInt(process.env.OPENAI_MAX_TOKENS || '500')

export async function POST(request: Request) {
  try {
    // Check if API key is set
    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is not set')
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      )
    }

    const { message, history } = await request.json()
    console.log('Received message:', message)
    console.log('History:', history)

    // Create messages array with system message and history
    const messages = [
      {
        role: "system",
        content: `You are a helpful AI assistant for Kevin Lin's portfolio website. You have access to the following information about Kevin:

        Personal Information:
        - Name: Kevin Lin
        - Location: Based in the location specified in the contact information
        - Current Status: Available for new opportunities

        Experience:
        - Software Engineer at various companies
        - Experience with modern web technologies
        - Portfolio includes various projects showcasing technical skills

        Skills:
        - Frontend Development (React, Next.js, TypeScript)
        - Backend Development
        - Full-stack Development
        - Modern web technologies

        Projects:
        - Various portfolio projects showcasing different technical skills
        - Projects available on GitHub
        - Live demos available for some projects

        Be professional but friendly. Use this information to provide accurate and helpful responses about Kevin's portfolio, experience, and skills. 
        If you don't know something specific about Kevin's portfolio, say so politely.
        Maintain context from previous messages to provide more relevant and coherent responses.`
      },
      ...history,
      {
        role: "user",
        content: message
      }
    ]

    console.log('Sending to OpenAI:', messages)

    // Create a chat completion with full history
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages,
      temperature: OPENAI_TEMPERATURE,
      max_tokens: OPENAI_MAX_TOKENS,
    })

    const response = completion.choices[0].message.content
    console.log('OpenAI response:', response)

    return NextResponse.json({ message: response })
  } catch (error: any) {
    console.error('Error in chat API:', error)
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      status: error.status
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to process chat request',
        details: error.message
      },
      { status: 500 }
    )
  }
} 