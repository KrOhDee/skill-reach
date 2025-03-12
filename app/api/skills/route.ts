import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const skills = await prisma.skill.findMany();
    return NextResponse.json(skills, { status: 200 });
  } catch (err) {
    console.error('Error fetching skills:', err);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}
