import { MAPPER_CONDITION } from '../definition/constant'

export function mapperItem (data) {
    return {
       ...data,
       item: {
        ...data.item,
        condition: MAPPER_CONDITION[data.item.condition]
       }
    }
}
