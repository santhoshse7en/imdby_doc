Quick start
The first thing to do is to import imdb and call the imdb.IMDb function to get an access object through which IMDb data can be retrieved:

>>> import imdb
>>> ia = imdb.IMDb()
By default this will fetch the data from the IMDb web server but there are other options. See the access systems document for more information.

Searching
You can use the search_movie method of the access object to search for movies with a given (or similar) title. For example, to search for movies with titles like “matrix”:

>>> movies = ia.search_movie('matrix')
>>> movies[0]
<Movie id:0133093[http] title:_The Matrix (1999)_>
Similarly, you can search for people and companies using the search_person and the search_company methods:

>>> people = ia.search_person('angelina')
>>> people[0]
<Person id:0001401[http] name:_Jolie, Angelina_>
>>> companies = ia.search_company('rko')
>>> companies[0]
<Company id:0226417[http] name:_RKO_>
As the examples indicate, the results are lists of Movie, Person, or Company objects. These behave like dictionaries, i.e. they can be queried by giving the key of the data you want to obtain:

>>> movies[0]['title']
'The Matrix'
>>> people[0]['name']
'Angelina Jolie'
>>> companies[0]['name']
'RKO'
Movie, person, and company objects have id attributes which -when fetched through the IMDb web server- store the IMDb id of the object:

>>> movies[0].movieID
'0133093'
>>> people[0].personID
'0001401'
>>> companies[0].companyID
'0226417'
Retrieving
If you know the IMDb id of a movie, you can use the get_movie method to retrieve its data. For example, the movie “The Untouchables” by Brian De Palma has the id “0094226”:

>>> movie = ia.get_movie('0094226')
>>> movie
<Movie id:0094226[http] title:_The Untouchables (1987)_>
Similarly, the get_person and the get_company methods can be used for retrieving Person and Company data:

>>> person = ia.get_person('0000206')
>>> person['name']
'Keanu Reeves'
>>> person['birth date']
'1964-9-2'
>>> company = ia.get_company('0017902')
>>> company['name']
'Pixar Animation Studios'
Keywords
You can search for keywords similar to the one provided:

>>> keywords = ia.search_keyword('dystopia')
>>> keywords
['dystopia', 'dystopian-future', ..., 'dystopic-future']
And movies that match a given keyword:

>>> movies = ia.get_keyword('dystopia')
>>> len(movies)
50
>>> movies[0]
<Movie id:1677720[http] title:_Ready Player One (2018)_>
Top / bottom movies
It’s possible to retrieve the list of top 250 and bottom 100 movies:

>>> top = ia.get_top250_movies()
>>> top[0]
<Movie id:0111161[http] title:_The Shawshank Redemption (1994)_>
>>> bottom = ia.get_bottom100_movies()
>>> bottom[0]
<Movie id:4458206[http] title:_Code Name: K.O.Z. (2015)_>
The get_top250_tv, get_popular100_movies, get_popular100_movies and get_top250_indian_movies methods are also available.

Exceptions
Any error related to IMDbPY can be caught by checking for the imdb.IMDbError exception:

from imdb import IMDb, IMDbError

try:
    ia = IMDb()
    people = ia.search_person('Mel Gibson')
except IMDbError as e:
    print(e)
