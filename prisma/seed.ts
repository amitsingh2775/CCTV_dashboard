import { PrismaClient } from '../app/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  
  await prisma.incident.deleteMany()
  await prisma.camera.deleteMany()


  const cameraA = await prisma.camera.create({
    data: { name: 'Camera - 01', location: 'Shop Floor A' },
  })

  const cameraB = await prisma.camera.create({
    data: { name: 'Camera - 02', location: 'Vault' },
  })

  const cameraC = await prisma.camera.create({
    data: { name: 'Camera - 03', location: 'Entrance' },
  })

 
  const baseDate = new Date('2025-07-22T00:00:00Z')

  const incidents = [
    {
      cameraId: cameraA.id,
      type: 'Unauthorized Access',
      offsetMins: 100,
      durationMins: 5,
      thumbnailUrl: '/thumbnails/unauthorized-access.png',
    },
    {
      cameraId: cameraA.id,
      type: 'Face Recognized',
      offsetMins: 130,
      durationMins: 2,
      thumbnailUrl: '/thumbnails/face-recognized.png',
    },
    {
      cameraId: cameraB.id,
      type: 'Gun Threat',
      offsetMins: 200,
      durationMins: 4,
      thumbnailUrl: '/thumbnails/gun-threat.jpg',
    },
    {
      cameraId: cameraB.id,
      type: 'Unauthorized Access',
      offsetMins: 250,
      durationMins: 6,
      thumbnailUrl: '/thumbnails/unauthorized-access.png',
    },
    {
      cameraId: cameraC.id,
      type: 'Face Recognized',
      offsetMins: 300,
      durationMins: 3,
      thumbnailUrl: '/thumbnails/face-recognized.png',
    },
    {
      cameraId: cameraC.id,
      type: 'Unauthorized Access',
      offsetMins: 350,
      durationMins: 5,
      thumbnailUrl: '/thumbnails/unauthorized-access.png',
    },
    {
      cameraId: cameraA.id,
      type: 'Gun Threat',
      offsetMins: 400,
      durationMins: 7,
      thumbnailUrl: '/thumbnails/gun-threat.jpg',
    },
    {
      cameraId: cameraA.id,
      type: 'Face Recognized',
      offsetMins: 450,
      durationMins: 2,
      thumbnailUrl: '/thumbnails/face-recognized.png',
    },
    {
      cameraId: cameraB.id,
      type: 'Unauthorized Access',
      offsetMins: 500,
      durationMins: 6,
      thumbnailUrl: '/thumbnails/unauthorized-access.png',
    },
    {
      cameraId: cameraC.id,
      type: 'Gun Threat',
      offsetMins: 550,
      durationMins: 4,
      thumbnailUrl: '/thumbnails/gun-threat.jpg',
    },
    {
      cameraId: cameraB.id,
      type: 'Face Recognized',
      offsetMins: 600,
      durationMins: 2,
      thumbnailUrl: '/thumbnails/face-recognized.png',
    },
    {
      cameraId: cameraC.id,
      type: 'Unauthorized Access',
      offsetMins: 650,
      durationMins: 5,
      thumbnailUrl: '/thumbnails/unauthorized-access.png',
    },
  ]

  for (const incident of incidents) {
    const tsStart = new Date(baseDate.getTime() + incident.offsetMins * 60000)
    const tsEnd = new Date(tsStart.getTime() + incident.durationMins * 60000)

    await prisma.incident.create({
      data: {
        cameraId: incident.cameraId,
        type: incident.type,
        tsStart,
        tsEnd,
        thumbnailUrl: incident.thumbnailUrl,
        resolved: false,
      },
    })
  }

}

main()
  .catch((e) => {
   
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
