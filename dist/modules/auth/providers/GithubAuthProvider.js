

const providerId = 'github.com'; /**
                                  * 
                                  * GithubAuthProvider representation wrapper
                                  */


export default class GithubAuthProvider {
  constructor() {
    throw new Error('`new GithubAuthProvider()` is not supported on the native Firebase SDKs.');
  }

  static get PROVIDER_ID() {
    return providerId;
  }

  static credential(token) {
    return {
      token,
      secret: '',
      providerId
    };
  }
}