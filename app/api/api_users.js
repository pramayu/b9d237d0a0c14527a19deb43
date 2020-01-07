import gql from 'graphql-tag';

export const API_CREATEUSER = gql`
    mutation($email: String!, $password: String!, $phone: String!) {
        createuser(email: $email, password: $password, phone: $phone) {
            status
            errorpath
            infopath
        }
    }
`

export const API_VERIFYUSER = gql`
    mutation($verifycode: String!) {
        verifyuser(verifycode: $verifycode) {
            status
            errorpath
            infopath
            refreshtoken
        }
    }
`

export const API_CHECKTOKEN = gql`
    mutation($refreshtoken: String!) {
        checkaccesstoken(refreshtoken: $refreshtoken) {
            status
            errorpath
            infopath
            accesstoken
        }
    }
`

export const API_CHECKUSER = gql`
    mutation($email: String!, $password: String!) {
        checkuserlog(email: $email, password: $password) {
            status
            errorpath
            infopath
            refreshtoken
        }
    }
`