## Quickstart

The first thing to do is to import imdb and call the imdb.IMDb function to get an access object through which IMDb data can be retrieved:

```python
>>> import imdb
>>> ia = imdb.IMDb()
```
### Searching

You can use the search_movie method of the access object to search for movies with a given (or similar) title. For example, to search for movies with titles like “matrix”:


```python
>>> movies = ia.search_movie('endgame')
>>> print('Movie ID: %s, Movie Name: %s' % (movies.title_id, movies.title_name))

'Movie ID: tt4154796, Movie Name: Avengers: Endgame'
```

Similarly, you can search for people and companies using the search_person and the search_company methods:

```python
>>> people = ia.search_person('robert downey')
>>> print('Person ID: %s, Person Name: %s' % (people.person_id, people.person_name))

'Person ID: nm0000375, Person Name: Robert Downey Jr.'
```

```python
>>> companies = ia.search_company('rko')
>>> print('Company ID: %s, Company Name: %s' % (companies.company_id, companies.company_name))

'Company ID: co0051941, Company Name: Marvel Studios'
```

As the examples indicate, the results are suggestion of Movie, Person, or Company in order. These behave like multiple choice, i.e. they can be queried by object data you want to obtain from your selection:

```python
>>> movies.title_name
'Avengers: Endgame'
>>> people.person_name
'Robert Downey Jr.'
>>> companies.company_name
'Marvel Studios'
```
Movie, person, and company objects have id attributes which -when fetched through the IMDb web server- store the IMDb id of the object:

```python
>>> movies.title_id
'tt4154796'
>>> people[0].personID
'nm0000375'
>>> companies[0].companyID
'co0051941'
```
### Retrieving
If you know the IMDb id of a movie, you can use the movie method to retrieve its data. For example, the movie “The Untouchables” by Brian De Palma has the id “tt4154796”:

```python
>>> movie = ia.movie('tt0094226')
>>> movie.title

'The Untouchables'
```

Similarly, the get_person and the get_company methods can be used for retrieving Person and Company data:

```python
>>> person = ia.person('nm0000206')
>>> print('Name: %s, DOB: %s' % (person.title, person.dob))

'Name: Keanu Reeves, DOB: 1964-9-2'
```

```python
>>> company = ia.company('co0017902')
>>> company.name
'Pixar Animation Studios'
```