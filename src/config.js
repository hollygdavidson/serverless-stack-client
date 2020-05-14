const dev = {
  STRIPE_KEY: "pk_test_WaTJtBKMF4ik9w4BAw8I9scz003WZGpkPV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1qn34ho0cg4bg"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.notes-app-demo.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_dFA6uL0Lu",
    APP_CLIENT_ID: "6mp5h1e3ms045k32k8pifnv89p",
    IDENTITY_POOL_ID: "us-east-1:03ee0a9b-28d4-476a-98c2-1fa0bf2dee2e"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_WaTJtBKMF4ik9w4BAw8I9scz003WZGpkPV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-52ibul95wyu"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.notes-app-demo.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_JdUQDhn3d",
    APP_CLIENT_ID: "6963mhcp2uu0kbk0tuc5njp2nd",
    IDENTITY_POOL_ID: "us-east-1:4d4a0812-61f5-4453-9e24-329a2cb02f41"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
