import gql from 'graphql-tag';

export const API_DISCOVERSCHOOL=gql`
    mutation($identity: String!, $usertype: String!) {
        discoverschool(identity: $identity, usertype: $usertype) {
            status
            errorpath
            infopath
            student {
                id
                strid
                school {
                    id
                    schoolcode
                    name
                }
            }
        }
    }
`;

export const API_CONNECTUSERSTUDENT=gql`
    mutation($usercode: String!, $fusertype: String!) {
        connectuserstudent(usercode: $usercode, fusertype: $fusertype){
            status
            errorpath
            infopath
        }
    }
`