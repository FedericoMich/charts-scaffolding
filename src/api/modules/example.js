import instance from '../index';

const RES_EXAMPLE = 'example';

/**
 * This is an example of enpoint
 */
const ExampleApi = {
  getExampleById(id) {
    return instance.get(`/${RES_EXAMPLE}/${id}`);
  },
};

export default ExampleApi;
