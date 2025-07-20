import { getPayload } from 'payload'
import config from '@payload-config'
import type { Hero } from '@/payload-types'

export const getHero = async () => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({
    slug: 'hero',
    depth: 1,
  }) as Hero
}