import prisma from "@/lib/db";

export async function POST(
  request: Request,
  { params }: { params: { availableday: string } },
) {
  const body = await request.json();
  const { name, price, startTime, appointmentLength } = body;

  const appointment = await prisma.appointment.create({
    data: {
      name,
      price,
      startTime,
      appointmentLength,
      dayId: params.availableday,
    },
  });
  return Response.json({ appointment });
}
