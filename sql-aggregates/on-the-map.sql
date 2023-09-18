select "countries"."name" as "country",
  count(*) as "numberOfCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countryId";
