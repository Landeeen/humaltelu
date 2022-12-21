export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "defaultGroupRole": "string",
            "paidGroupRole": "string"
        },
        "humalteluauth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "humaltelu": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}