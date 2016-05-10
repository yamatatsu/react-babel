import { createTypes } from 'redux-action-types'

export const ACTION_TYPE = createTypes('my-app/module/',
  'FETCH_SHOP'
)

export default {
  fetchShop: () => {
    return {
      type: ACTION_TYPE.FETCH_SHOP,
      shops: ["梅屋", "六角屋"],
    }
  },
}
