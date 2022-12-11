import React from "react";
import { gql } from "@apollo/client";
import { useQueryRd, match } from "use-query-rd";
import { Launch } from "../graphql/types";

const ROCKETS_QUERY = gql`
  query rockets($limit: Int!) {
    launchesPast(limit: $limit) {
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export const Rockets = () =>
  match(
    useQueryRd<{ launchesPast: Launch[] }>(ROCKETS_QUERY, {
      variables: { limit: 10 },
    })._rd,
    {
      _: () => <p>Loading...</p>,
      Failure: (error) => <p>Error while fetching data ({error.message})</p>,
      Success: (data: { launchesPast: Launch[] }) => {
        return (
          <>
            <p>Data</p>
            {data.launchesPast.map((d, i) => {
              return (
                <div key={i}>
                  <p
                    data-testid={`launchSiteName${i}`}
                  >{`Launch Site: ${d.launch_site?.site_name_long}`}</p>
                  <p>{`Rocket Name: ${d.rocket?.rocket_name}`}</p>
                </div>
              );
            })}
          </>
        );
      },
    }
  );
