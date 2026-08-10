import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  await headers();
  try {
    const body = await request.json();
    const { items, totalAmount } = body;
    // items should be an array of { productId, quantity, price }

    if (!items || !items.length || totalAmount === undefined) {
      return NextResponse.json({ error: 'Invalid order data' }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        totalAmount: parseFloat(totalAmount.toString()),
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: parseFloat(item.price.toString()),
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json([], { status: 200 });
  }
}
