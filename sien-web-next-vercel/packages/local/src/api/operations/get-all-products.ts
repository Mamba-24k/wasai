import { Product } from '@vercel/commerce/types/product'
import { GetAllProductsOperation } from '@vercel/commerce/types/product'
import type { OperationContext } from '@vercel/commerce/api/operations'
import type { LocalConfig, Provider } from '../index'
import data from '../../data.json'
// @ts-ignore
import clientPromise from '../../lib/mongodb'

export default function getAllProductsOperation({
  commerce,
}: OperationContext<any>) {
  async function getAllProducts<T extends GetAllProductsOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<{ products: Product[] | any[] }> {
    // @ts-ignore
    const client = await clientPromise
    const db = client.db('vercelsien')
    const users = await db.collection('products').find().toArray()
    console.log('users', users)
    return {
      products: users,
    }
  }
  return getAllProducts
}
