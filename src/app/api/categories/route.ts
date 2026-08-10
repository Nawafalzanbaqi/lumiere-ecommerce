import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await headers();
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nameEn, nameAr, slug } = body;
    
    if (!nameEn || !nameAr || !slug) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const category = await prisma.category.create({
      data: { nameEn, nameAr, slug },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
