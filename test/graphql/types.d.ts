export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: string;
  timestamptz: any;
  uuid: any;
};

export type Address = {
  readonly __typename?: 'Address';
  readonly address?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly state?: Maybe<Scalars['String']>;
};

export type Capsule = {
  readonly __typename?: 'Capsule';
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  readonly dragon?: Maybe<Dragon>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly landings?: Maybe<Scalars['Int']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<CapsuleMission>>>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type CapsuleMission = {
  readonly __typename?: 'CapsuleMission';
  readonly flight?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly landings?: InputMaybe<Scalars['Int']>;
  readonly mission?: InputMaybe<Scalars['String']>;
  readonly original_launch?: InputMaybe<Scalars['Date']>;
  readonly reuse_count?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
};

export type Core = {
  readonly __typename?: 'Core';
  readonly asds_attempts?: Maybe<Scalars['Int']>;
  readonly asds_landings?: Maybe<Scalars['Int']>;
  readonly block?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<CapsuleMission>>>;
  readonly original_launch?: Maybe<Scalars['Date']>;
  readonly reuse_count?: Maybe<Scalars['Int']>;
  readonly rtls_attempts?: Maybe<Scalars['Int']>;
  readonly rtls_landings?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly water_landing?: Maybe<Scalars['Boolean']>;
};

export type CoreMission = {
  readonly __typename?: 'CoreMission';
  readonly flight?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type CoresFind = {
  readonly asds_attempts?: InputMaybe<Scalars['Int']>;
  readonly asds_landings?: InputMaybe<Scalars['Int']>;
  readonly block?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['String']>;
  readonly missions?: InputMaybe<Scalars['String']>;
  readonly original_launch?: InputMaybe<Scalars['Date']>;
  readonly reuse_count?: InputMaybe<Scalars['Int']>;
  readonly rtls_attempts?: InputMaybe<Scalars['Int']>;
  readonly rtls_landings?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly water_landing?: InputMaybe<Scalars['Boolean']>;
};

export type Distance = {
  readonly __typename?: 'Distance';
  readonly feet?: Maybe<Scalars['Float']>;
  readonly meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  readonly __typename?: 'Dragon';
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly crew_capacity?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly diameter?: Maybe<Distance>;
  readonly dry_mass_kg?: Maybe<Scalars['Int']>;
  readonly dry_mass_lb?: Maybe<Scalars['Int']>;
  readonly first_flight?: Maybe<Scalars['String']>;
  readonly heat_shield?: Maybe<DragonHeatShield>;
  readonly height_w_trunk?: Maybe<Distance>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly launch_payload_mass?: Maybe<Mass>;
  readonly launch_payload_vol?: Maybe<Volume>;
  readonly name?: Maybe<Scalars['String']>;
  readonly orbit_duration_yr?: Maybe<Scalars['Int']>;
  readonly pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  readonly return_payload_mass?: Maybe<Mass>;
  readonly return_payload_vol?: Maybe<Volume>;
  readonly sidewall_angle_deg?: Maybe<Scalars['Float']>;
  readonly thrusters?: Maybe<ReadonlyArray<Maybe<DragonThrust>>>;
  readonly trunk?: Maybe<DragonTrunk>;
  readonly type?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type DragonHeatShield = {
  readonly __typename?: 'DragonHeatShield';
  readonly dev_partner?: Maybe<Scalars['String']>;
  readonly material?: Maybe<Scalars['String']>;
  readonly size_meters?: Maybe<Scalars['Float']>;
  readonly temp_degrees?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
  readonly __typename?: 'DragonPressurizedCapsule';
  readonly payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  readonly __typename?: 'DragonThrust';
  readonly amount?: Maybe<Scalars['Int']>;
  readonly fuel_1?: Maybe<Scalars['String']>;
  readonly fuel_2?: Maybe<Scalars['String']>;
  readonly pods?: Maybe<Scalars['Int']>;
  readonly thrust?: Maybe<Force>;
  readonly type?: Maybe<Scalars['String']>;
};

export type DragonTrunk = {
  readonly __typename?: 'DragonTrunk';
  readonly cargo?: Maybe<DragonTrunkCargo>;
  readonly trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  readonly __typename?: 'DragonTrunkCargo';
  readonly solar_array?: Maybe<Scalars['Int']>;
  readonly unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Force = {
  readonly __typename?: 'Force';
  readonly kN?: Maybe<Scalars['Float']>;
  readonly lbf?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
  readonly __typename?: 'HistoriesResult';
  readonly data?: Maybe<ReadonlyArray<Maybe<History>>>;
  readonly result?: Maybe<Result>;
};

export type History = {
  readonly __typename?: 'History';
  readonly details?: Maybe<Scalars['String']>;
  readonly event_date_unix?: Maybe<Scalars['Date']>;
  readonly event_date_utc?: Maybe<Scalars['Date']>;
  readonly flight?: Maybe<Launch>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly links?: Maybe<Link>;
  readonly title?: Maybe<Scalars['String']>;
};

export type HistoryFind = {
  readonly end?: InputMaybe<Scalars['Date']>;
  readonly flight_number?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly start?: InputMaybe<Scalars['Date']>;
};

export type Info = {
  readonly __typename?: 'Info';
  readonly ceo?: Maybe<Scalars['String']>;
  readonly coo?: Maybe<Scalars['String']>;
  readonly cto?: Maybe<Scalars['String']>;
  readonly cto_propulsion?: Maybe<Scalars['String']>;
  readonly employees?: Maybe<Scalars['Int']>;
  readonly founded?: Maybe<Scalars['Int']>;
  readonly founder?: Maybe<Scalars['String']>;
  readonly headquarters?: Maybe<Address>;
  readonly launch_sites?: Maybe<Scalars['Int']>;
  readonly links?: Maybe<InfoLinks>;
  readonly name?: Maybe<Scalars['String']>;
  readonly summary?: Maybe<Scalars['String']>;
  readonly test_sites?: Maybe<Scalars['Int']>;
  readonly valuation?: Maybe<Scalars['Float']>;
  readonly vehicles?: Maybe<Scalars['Int']>;
};

export type InfoLinks = {
  readonly __typename?: 'InfoLinks';
  readonly elon_twitter?: Maybe<Scalars['String']>;
  readonly flickr?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
  readonly website?: Maybe<Scalars['String']>;
};

export type Landpad = {
  readonly __typename?: 'Landpad';
  readonly attempted_landings?: Maybe<Scalars['String']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly full_name?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly landing_type?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Location>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_landings?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  readonly __typename?: 'Launch';
  readonly details?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly is_tentative?: Maybe<Scalars['Boolean']>;
  readonly launch_date_local?: Maybe<Scalars['Date']>;
  readonly launch_date_unix?: Maybe<Scalars['Date']>;
  readonly launch_date_utc?: Maybe<Scalars['Date']>;
  readonly launch_site?: Maybe<LaunchSite>;
  readonly launch_success?: Maybe<Scalars['Boolean']>;
  readonly launch_year?: Maybe<Scalars['String']>;
  readonly links?: Maybe<LaunchLinks>;
  readonly mission_id?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly mission_name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<LaunchRocket>;
  readonly ships?: Maybe<ReadonlyArray<Maybe<Ship>>>;
  readonly static_fire_date_unix?: Maybe<Scalars['Date']>;
  readonly static_fire_date_utc?: Maybe<Scalars['Date']>;
  readonly telemetry?: Maybe<LaunchTelemetry>;
  readonly tentative_max_precision?: Maybe<Scalars['String']>;
  readonly upcoming?: Maybe<Scalars['Boolean']>;
};

export type LaunchFind = {
  readonly apoapsis_km?: InputMaybe<Scalars['Float']>;
  readonly block?: InputMaybe<Scalars['Int']>;
  readonly cap_serial?: InputMaybe<Scalars['String']>;
  readonly capsule_reuse?: InputMaybe<Scalars['String']>;
  readonly core_flight?: InputMaybe<Scalars['Int']>;
  readonly core_reuse?: InputMaybe<Scalars['String']>;
  readonly core_serial?: InputMaybe<Scalars['String']>;
  readonly customer?: InputMaybe<Scalars['String']>;
  readonly eccentricity?: InputMaybe<Scalars['Float']>;
  readonly end?: InputMaybe<Scalars['Date']>;
  readonly epoch?: InputMaybe<Scalars['Date']>;
  readonly fairings_recovered?: InputMaybe<Scalars['String']>;
  readonly fairings_recovery_attempt?: InputMaybe<Scalars['String']>;
  readonly fairings_reuse?: InputMaybe<Scalars['String']>;
  readonly fairings_reused?: InputMaybe<Scalars['String']>;
  readonly fairings_ship?: InputMaybe<Scalars['String']>;
  readonly gridfins?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly inclination_deg?: InputMaybe<Scalars['Float']>;
  readonly land_success?: InputMaybe<Scalars['String']>;
  readonly landing_intent?: InputMaybe<Scalars['String']>;
  readonly landing_type?: InputMaybe<Scalars['String']>;
  readonly landing_vehicle?: InputMaybe<Scalars['String']>;
  readonly launch_date_local?: InputMaybe<Scalars['Date']>;
  readonly launch_date_utc?: InputMaybe<Scalars['Date']>;
  readonly launch_success?: InputMaybe<Scalars['String']>;
  readonly launch_year?: InputMaybe<Scalars['String']>;
  readonly legs?: InputMaybe<Scalars['String']>;
  readonly lifespan_years?: InputMaybe<Scalars['Float']>;
  readonly longitude?: InputMaybe<Scalars['Float']>;
  readonly manufacturer?: InputMaybe<Scalars['String']>;
  readonly mean_motion?: InputMaybe<Scalars['Float']>;
  readonly mission_id?: InputMaybe<Scalars['String']>;
  readonly mission_name?: InputMaybe<Scalars['String']>;
  readonly nationality?: InputMaybe<Scalars['String']>;
  readonly norad_id?: InputMaybe<Scalars['Int']>;
  readonly orbit?: InputMaybe<Scalars['String']>;
  readonly payload_id?: InputMaybe<Scalars['String']>;
  readonly payload_type?: InputMaybe<Scalars['String']>;
  readonly periapsis_km?: InputMaybe<Scalars['Float']>;
  readonly period_min?: InputMaybe<Scalars['Float']>;
  readonly raan?: InputMaybe<Scalars['Float']>;
  readonly reference_system?: InputMaybe<Scalars['String']>;
  readonly regime?: InputMaybe<Scalars['String']>;
  readonly reused?: InputMaybe<Scalars['String']>;
  readonly rocket_id?: InputMaybe<Scalars['String']>;
  readonly rocket_name?: InputMaybe<Scalars['String']>;
  readonly rocket_type?: InputMaybe<Scalars['String']>;
  readonly second_stage_block?: InputMaybe<Scalars['String']>;
  readonly semi_major_axis_km?: InputMaybe<Scalars['Float']>;
  readonly ship?: InputMaybe<Scalars['String']>;
  readonly side_core1_reuse?: InputMaybe<Scalars['String']>;
  readonly side_core2_reuse?: InputMaybe<Scalars['String']>;
  readonly site_id?: InputMaybe<Scalars['String']>;
  readonly site_name?: InputMaybe<Scalars['String']>;
  readonly site_name_long?: InputMaybe<Scalars['String']>;
  readonly start?: InputMaybe<Scalars['Date']>;
  readonly tbd?: InputMaybe<Scalars['String']>;
  readonly tentative?: InputMaybe<Scalars['String']>;
  readonly tentative_max_precision?: InputMaybe<Scalars['String']>;
};

export type LaunchLinks = {
  readonly __typename?: 'LaunchLinks';
  readonly article_link?: Maybe<Scalars['String']>;
  readonly flickr_images?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly mission_patch?: Maybe<Scalars['String']>;
  readonly mission_patch_small?: Maybe<Scalars['String']>;
  readonly presskit?: Maybe<Scalars['String']>;
  readonly reddit_campaign?: Maybe<Scalars['String']>;
  readonly reddit_launch?: Maybe<Scalars['String']>;
  readonly reddit_media?: Maybe<Scalars['String']>;
  readonly reddit_recovery?: Maybe<Scalars['String']>;
  readonly video_link?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  readonly __typename?: 'LaunchRocket';
  readonly fairings?: Maybe<LaunchRocketFairings>;
  readonly first_stage?: Maybe<LaunchRocketFirstStage>;
  readonly rocket?: Maybe<Rocket>;
  readonly rocket_name?: Maybe<Scalars['String']>;
  readonly rocket_type?: Maybe<Scalars['String']>;
  readonly second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  readonly __typename?: 'LaunchRocketFairings';
  readonly recovered?: Maybe<Scalars['Boolean']>;
  readonly recovery_attempt?: Maybe<Scalars['Boolean']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
  readonly ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  readonly __typename?: 'LaunchRocketFirstStage';
  readonly cores?: Maybe<ReadonlyArray<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  readonly __typename?: 'LaunchRocketFirstStageCore';
  readonly block?: Maybe<Scalars['Int']>;
  readonly core?: Maybe<Core>;
  readonly flight?: Maybe<Scalars['Int']>;
  readonly gridfins?: Maybe<Scalars['Boolean']>;
  readonly land_success?: Maybe<Scalars['Boolean']>;
  readonly landing_intent?: Maybe<Scalars['Boolean']>;
  readonly landing_type?: Maybe<Scalars['String']>;
  readonly landing_vehicle?: Maybe<Scalars['String']>;
  readonly legs?: Maybe<Scalars['Boolean']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
  readonly __typename?: 'LaunchRocketSecondStage';
  readonly block?: Maybe<Scalars['Int']>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
};

export type LaunchSite = {
  readonly __typename?: 'LaunchSite';
  readonly site_id?: Maybe<Scalars['String']>;
  readonly site_name?: Maybe<Scalars['String']>;
  readonly site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  readonly __typename?: 'LaunchTelemetry';
  readonly flight_club?: Maybe<Scalars['String']>;
};

export type LaunchesPastResult = {
  readonly __typename?: 'LaunchesPastResult';
  readonly data?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly result?: Maybe<Result>;
};

export type Launchpad = {
  readonly __typename?: 'Launchpad';
  readonly attempted_launches?: Maybe<Scalars['Int']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly location?: Maybe<Location>;
  readonly name?: Maybe<Scalars['String']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_launches?: Maybe<Scalars['Int']>;
  readonly vehicles_launched?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type Link = {
  readonly __typename?: 'Link';
  readonly article?: Maybe<Scalars['String']>;
  readonly reddit?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  readonly __typename?: 'Location';
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly region?: Maybe<Scalars['String']>;
};

export type Mass = {
  readonly __typename?: 'Mass';
  readonly kg?: Maybe<Scalars['Int']>;
  readonly lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  readonly __typename?: 'Mission';
  readonly description?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly manufacturers?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
  readonly twitter?: Maybe<Scalars['String']>;
  readonly website?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type MissionResult = {
  readonly __typename?: 'MissionResult';
  readonly data?: Maybe<ReadonlyArray<Maybe<Mission>>>;
  readonly result?: Maybe<Result>;
};

export type MissionsFind = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly manufacturer?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly payload_id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** delete data from the table: "users" */
  readonly delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users" */
  readonly insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users" */
  readonly update_users?: Maybe<Users_Mutation_Response>;
};


export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type MutationInsert_UsersArgs = {
  objects: ReadonlyArray<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


export type MutationUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type Payload = {
  readonly __typename?: 'Payload';
  readonly customers?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly manufacturer?: Maybe<Scalars['String']>;
  readonly nationality?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly orbit?: Maybe<Scalars['String']>;
  readonly orbit_params?: Maybe<PayloadOrbitParams>;
  readonly payload_mass_kg?: Maybe<Scalars['Float']>;
  readonly payload_mass_lbs?: Maybe<Scalars['Float']>;
  readonly payload_type?: Maybe<Scalars['String']>;
  readonly reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  readonly __typename?: 'PayloadOrbitParams';
  readonly apoapsis_km?: Maybe<Scalars['Float']>;
  readonly arg_of_pericenter?: Maybe<Scalars['Float']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly epoch?: Maybe<Scalars['Date']>;
  readonly inclination_deg?: Maybe<Scalars['Float']>;
  readonly lifespan_years?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly mean_anomaly?: Maybe<Scalars['Float']>;
  readonly mean_motion?: Maybe<Scalars['Float']>;
  readonly periapsis_km?: Maybe<Scalars['Float']>;
  readonly period_min?: Maybe<Scalars['Float']>;
  readonly raan?: Maybe<Scalars['Float']>;
  readonly reference_system?: Maybe<Scalars['String']>;
  readonly regime?: Maybe<Scalars['String']>;
  readonly semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadsFind = {
  readonly apoapsis_km?: InputMaybe<Scalars['Float']>;
  readonly customer?: InputMaybe<Scalars['String']>;
  readonly eccentricity?: InputMaybe<Scalars['Float']>;
  readonly epoch?: InputMaybe<Scalars['Date']>;
  readonly inclination_deg?: InputMaybe<Scalars['Float']>;
  readonly lifespan_years?: InputMaybe<Scalars['Float']>;
  readonly longitude?: InputMaybe<Scalars['Float']>;
  readonly manufacturer?: InputMaybe<Scalars['String']>;
  readonly mean_motion?: InputMaybe<Scalars['Float']>;
  readonly nationality?: InputMaybe<Scalars['String']>;
  readonly norad_id?: InputMaybe<Scalars['Int']>;
  readonly orbit?: InputMaybe<Scalars['String']>;
  readonly payload_id?: InputMaybe<Scalars['ID']>;
  readonly payload_type?: InputMaybe<Scalars['String']>;
  readonly periapsis_km?: InputMaybe<Scalars['Float']>;
  readonly period_min?: InputMaybe<Scalars['Float']>;
  readonly raan?: InputMaybe<Scalars['Float']>;
  readonly reference_system?: InputMaybe<Scalars['String']>;
  readonly regime?: InputMaybe<Scalars['String']>;
  readonly reused?: InputMaybe<Scalars['Boolean']>;
  readonly semi_major_axis_km?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly capsule?: Maybe<Capsule>;
  readonly capsules?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly capsulesPast?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly capsulesUpcoming?: Maybe<ReadonlyArray<Maybe<Capsule>>>;
  readonly company?: Maybe<Info>;
  readonly core?: Maybe<Core>;
  readonly cores?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly coresPast?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly coresUpcoming?: Maybe<ReadonlyArray<Maybe<Core>>>;
  readonly dragon?: Maybe<Dragon>;
  readonly dragons?: Maybe<ReadonlyArray<Maybe<Dragon>>>;
  readonly histories?: Maybe<ReadonlyArray<Maybe<History>>>;
  readonly historiesResult?: Maybe<HistoriesResult>;
  readonly history?: Maybe<History>;
  readonly landpad?: Maybe<Landpad>;
  readonly landpads?: Maybe<ReadonlyArray<Maybe<Landpad>>>;
  readonly launch?: Maybe<Launch>;
  readonly launchLatest?: Maybe<Launch>;
  readonly launchNext?: Maybe<Launch>;
  readonly launches?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launchesPast?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launchesPastResult?: Maybe<LaunchesPastResult>;
  readonly launchesUpcoming?: Maybe<ReadonlyArray<Maybe<Launch>>>;
  readonly launchpad?: Maybe<Launchpad>;
  readonly launchpads?: Maybe<ReadonlyArray<Maybe<Launchpad>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  readonly mission?: Maybe<Mission>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  readonly missions?: Maybe<ReadonlyArray<Maybe<Mission>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  readonly missionsResult?: Maybe<MissionResult>;
  readonly payload?: Maybe<Payload>;
  readonly payloads?: Maybe<ReadonlyArray<Maybe<Payload>>>;
  readonly roadster?: Maybe<Roadster>;
  readonly rocket?: Maybe<Rocket>;
  readonly rockets?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
  readonly rocketsResult?: Maybe<RocketsResult>;
  readonly ship?: Maybe<Ship>;
  readonly ships?: Maybe<ReadonlyArray<Maybe<Ship>>>;
  readonly shipsResult?: Maybe<ShipsResult>;
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<Users>;
};


export type QueryCapsuleArgs = {
  id: Scalars['ID'];
};


export type QueryCapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  id: Scalars['ID'];
};


export type QueryCoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['ID'];
};


export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['ID'];
};


export type QueryMissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['ID'];
};


export type QueryPayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['ID'];
};


export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['ID'];
};


export type QueryShipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryShipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Result = {
  readonly __typename?: 'Result';
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type Roadster = {
  readonly __typename?: 'Roadster';
  readonly apoapsis_au?: Maybe<Scalars['Float']>;
  readonly details?: Maybe<Scalars['String']>;
  readonly earth_distance_km?: Maybe<Scalars['Float']>;
  readonly earth_distance_mi?: Maybe<Scalars['Float']>;
  readonly eccentricity?: Maybe<Scalars['Float']>;
  readonly epoch_jd?: Maybe<Scalars['Float']>;
  readonly inclination?: Maybe<Scalars['Float']>;
  readonly launch_date_unix?: Maybe<Scalars['Date']>;
  readonly launch_date_utc?: Maybe<Scalars['Date']>;
  readonly launch_mass_kg?: Maybe<Scalars['Int']>;
  readonly launch_mass_lbs?: Maybe<Scalars['Int']>;
  readonly longitude?: Maybe<Scalars['Float']>;
  readonly mars_distance_km?: Maybe<Scalars['Float']>;
  readonly mars_distance_mi?: Maybe<Scalars['Float']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly norad_id?: Maybe<Scalars['Int']>;
  readonly orbit_type?: Maybe<Scalars['Float']>;
  readonly periapsis_arg?: Maybe<Scalars['Float']>;
  readonly periapsis_au?: Maybe<Scalars['Float']>;
  readonly period_days?: Maybe<Scalars['Float']>;
  readonly semi_major_axis_au?: Maybe<Scalars['Float']>;
  readonly speed_kph?: Maybe<Scalars['Float']>;
  readonly speed_mph?: Maybe<Scalars['Float']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
  readonly __typename?: 'Rocket';
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly boosters?: Maybe<Scalars['Int']>;
  readonly company?: Maybe<Scalars['String']>;
  readonly cost_per_launch?: Maybe<Scalars['Int']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly diameter?: Maybe<Distance>;
  readonly engines?: Maybe<RocketEngines>;
  readonly first_flight?: Maybe<Scalars['Date']>;
  readonly first_stage?: Maybe<RocketFirstStage>;
  readonly height?: Maybe<Distance>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly landing_legs?: Maybe<RocketLandingLegs>;
  readonly mass?: Maybe<Mass>;
  readonly name?: Maybe<Scalars['String']>;
  readonly payload_weights?: Maybe<ReadonlyArray<Maybe<RocketPayloadWeight>>>;
  readonly second_stage?: Maybe<RocketSecondStage>;
  readonly stages?: Maybe<Scalars['Int']>;
  readonly success_rate_pct?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
  readonly __typename?: 'RocketEngines';
  readonly engine_loss_max?: Maybe<Scalars['String']>;
  readonly layout?: Maybe<Scalars['String']>;
  readonly number?: Maybe<Scalars['Int']>;
  readonly propellant_1?: Maybe<Scalars['String']>;
  readonly propellant_2?: Maybe<Scalars['String']>;
  readonly thrust_sea_level?: Maybe<Force>;
  readonly thrust_to_weight?: Maybe<Scalars['Float']>;
  readonly thrust_vacuum?: Maybe<Force>;
  readonly type?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  readonly __typename?: 'RocketFirstStage';
  readonly burn_time_sec?: Maybe<Scalars['Int']>;
  readonly engines?: Maybe<Scalars['Int']>;
  readonly fuel_amount_tons?: Maybe<Scalars['Float']>;
  readonly reusable?: Maybe<Scalars['Boolean']>;
  readonly thrust_sea_level?: Maybe<Force>;
  readonly thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  readonly __typename?: 'RocketLandingLegs';
  readonly material?: Maybe<Scalars['String']>;
  readonly number?: Maybe<Scalars['Int']>;
};

export type RocketPayloadWeight = {
  readonly __typename?: 'RocketPayloadWeight';
  readonly id?: Maybe<Scalars['String']>;
  readonly kg?: Maybe<Scalars['Int']>;
  readonly lb?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  readonly __typename?: 'RocketSecondStage';
  readonly burn_time_sec?: Maybe<Scalars['Int']>;
  readonly engines?: Maybe<Scalars['Int']>;
  readonly fuel_amount_tons?: Maybe<Scalars['Float']>;
  readonly payloads?: Maybe<RocketSecondStagePayloads>;
  readonly thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  readonly __typename?: 'RocketSecondStagePayloadCompositeFairing';
  readonly diameter?: Maybe<Distance>;
  readonly height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  readonly __typename?: 'RocketSecondStagePayloads';
  readonly composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  readonly option_1?: Maybe<Scalars['String']>;
};

export type RocketsResult = {
  readonly __typename?: 'RocketsResult';
  readonly data?: Maybe<ReadonlyArray<Maybe<Rocket>>>;
  readonly result?: Maybe<Result>;
};

export type Ship = {
  readonly __typename?: 'Ship';
  readonly abs?: Maybe<Scalars['Int']>;
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly attempted_landings?: Maybe<Scalars['Int']>;
  readonly class?: Maybe<Scalars['Int']>;
  readonly course_deg?: Maybe<Scalars['Int']>;
  readonly home_port?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<Scalars['String']>;
  readonly imo?: Maybe<Scalars['Int']>;
  readonly missions?: Maybe<ReadonlyArray<Maybe<ShipMission>>>;
  readonly mmsi?: Maybe<Scalars['Int']>;
  readonly model?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly position?: Maybe<ShipLocation>;
  readonly roles?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly speed_kn?: Maybe<Scalars['Float']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly successful_landings?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly weight_kg?: Maybe<Scalars['Int']>;
  readonly weight_lbs?: Maybe<Scalars['Int']>;
  readonly year_built?: Maybe<Scalars['Int']>;
};

export type ShipLocation = {
  readonly __typename?: 'ShipLocation';
  readonly latitude?: Maybe<Scalars['Float']>;
  readonly longitude?: Maybe<Scalars['Float']>;
};

export type ShipMission = {
  readonly __typename?: 'ShipMission';
  readonly flight?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type ShipsFind = {
  readonly abs?: InputMaybe<Scalars['Int']>;
  readonly active?: InputMaybe<Scalars['Boolean']>;
  readonly attempted_landings?: InputMaybe<Scalars['Int']>;
  readonly class?: InputMaybe<Scalars['Int']>;
  readonly course_deg?: InputMaybe<Scalars['Int']>;
  readonly home_port?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly imo?: InputMaybe<Scalars['Int']>;
  readonly latitude?: InputMaybe<Scalars['Float']>;
  readonly longitude?: InputMaybe<Scalars['Float']>;
  readonly mission?: InputMaybe<Scalars['String']>;
  readonly mmsi?: InputMaybe<Scalars['Int']>;
  readonly model?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Scalars['String']>;
  readonly speed_kn?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly successful_landings?: InputMaybe<Scalars['Int']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly weight_kg?: InputMaybe<Scalars['Int']>;
  readonly weight_lbs?: InputMaybe<Scalars['Int']>;
  readonly year_built?: InputMaybe<Scalars['Int']>;
};

export type ShipsResult = {
  readonly __typename?: 'ShipsResult';
  readonly data?: Maybe<ReadonlyArray<Maybe<Ship>>>;
  readonly result?: Maybe<Result>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  readonly _ilike?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _like?: InputMaybe<Scalars['String']>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  readonly _nilike?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly _nlike?: InputMaybe<Scalars['String']>;
  readonly _nsimilar?: InputMaybe<Scalars['String']>;
  readonly _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  /** fetch data from the table: "users" */
  readonly users: ReadonlyArray<Users>;
  /** fetch aggregated fields from the table: "users" */
  readonly users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  readonly users_by_pk?: Maybe<Users>;
};


export type SubscriptionUsersArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<ReadonlyArray<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Volume = {
  readonly __typename?: 'Volume';
  readonly cubic_feet?: Maybe<Scalars['Int']>;
  readonly cubic_meters?: Maybe<Scalars['Int']>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['timestamptz']>;
  readonly _gt?: InputMaybe<Scalars['timestamptz']>;
  readonly _gte?: InputMaybe<Scalars['timestamptz']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['timestamptz']>;
  readonly _lte?: InputMaybe<Scalars['timestamptz']>;
  readonly _neq?: InputMaybe<Scalars['timestamptz']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  readonly __typename?: 'users';
  readonly id: Scalars['uuid'];
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp: Scalars['timestamptz'];
  readonly twitter?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  readonly __typename?: 'users_aggregate';
  readonly aggregate?: Maybe<Users_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  readonly __typename?: 'users_aggregate_fields';
  readonly count?: Maybe<Scalars['Int']>;
  readonly max?: Maybe<Users_Max_Fields>;
  readonly min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<ReadonlyArray<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  readonly count?: InputMaybe<Order_By>;
  readonly max?: InputMaybe<Users_Max_Order_By>;
  readonly min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Users_Insert_Input>;
  readonly on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Users_Bool_Exp>>>;
  readonly _not?: InputMaybe<Users_Bool_Exp>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Users_Bool_Exp>>>;
  readonly id?: InputMaybe<Uuid_Comparison_Exp>;
  readonly name?: InputMaybe<String_Comparison_Exp>;
  readonly rocket?: InputMaybe<String_Comparison_Exp>;
  readonly timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly twitter?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  Key = 'key',
  Or = 'or',
  Primary = 'primary',
  Unique = 'unique',
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rocket?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['timestamptz']>;
  readonly twitter?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  readonly __typename?: 'users_max_fields';
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  readonly name?: InputMaybe<Order_By>;
  readonly rocket?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly twitter?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  readonly __typename?: 'users_min_fields';
  readonly name?: Maybe<Scalars['String']>;
  readonly rocket?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['timestamptz']>;
  readonly twitter?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  readonly name?: InputMaybe<Order_By>;
  readonly rocket?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly twitter?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  readonly __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  readonly returning: ReadonlyArray<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  readonly data: Users_Insert_Input;
  readonly on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  readonly constraint: Users_Constraint;
  readonly update_columns: ReadonlyArray<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  readonly id?: InputMaybe<Order_By>;
  readonly name?: InputMaybe<Order_By>;
  readonly rocket?: InputMaybe<Order_By>;
  readonly timestamp?: InputMaybe<Order_By>;
  readonly twitter?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  readonly id?: InputMaybe<Scalars['uuid']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly rocket?: InputMaybe<Scalars['String']>;
  readonly timestamp?: InputMaybe<Scalars['timestamptz']>;
  readonly twitter?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq?: InputMaybe<Scalars['uuid']>;
  readonly _gt?: InputMaybe<Scalars['uuid']>;
  readonly _gte?: InputMaybe<Scalars['uuid']>;
  readonly _in?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null?: InputMaybe<Scalars['Boolean']>;
  readonly _lt?: InputMaybe<Scalars['uuid']>;
  readonly _lte?: InputMaybe<Scalars['uuid']>;
  readonly _neq?: InputMaybe<Scalars['uuid']>;
  readonly _nin?: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};
