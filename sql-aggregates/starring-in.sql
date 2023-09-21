select "genres"."name" as "genre",
  count (*) as "numberOfMovies"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa'
  group by "genreId";
