import React from "react";
import { gql } from "@apollo/client";
import { useQueryRd, fold } from "use-query-rd";
import { Launch } from "../graphql/types";

const ROCKETS_QUERY = gql`
  query rockets($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

export const Rockets = () => {
  return fold(
    () => <p>Loading...</p>,
    () => <p>Loading...</p>,
    (error) => <p>Error while fetching data ({error.message})</p>,
    (data: { launchesPast: Launch[] }) => {
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
    }
  )(
    useQueryRd<{ launchesPast: Launch[] }>(ROCKETS_QUERY, {
      variables: { limit: 10 },
    })._rd
  );
};
