import _ from "lodash"

export const createErrorObject = (responseData) => {
  return _.omit(responseData, "done")
}
