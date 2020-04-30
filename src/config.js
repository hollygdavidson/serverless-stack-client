export default {
	STRIPE_KEY: "pk_test_WaTJtBKMF4ik9w4BAw8I9scz003WZGpkPV",
	MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1qt2d6b2xoau8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://x1d7a2g6j3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rv5Mqhpz3",
    APP_CLIENT_ID: "7crrgphrdsih5r48jm3g0ojlfi",
    IDENTITY_POOL_ID: "us-east-1:8a325051-2cde-40aa-a06e-13b7727f868d"
  }
};
