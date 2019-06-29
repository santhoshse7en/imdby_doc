## Quickstart

Eager to get started? This page gives a good introduction in how to get started with imdby. This assumes you already have imdby installed. If you do not, head over to the Installation section.

**Building a IMDb source**

Source objects are an abstraction of online multi-media content websites [IMDb](https://www.imdb.com/)

Building a Source will extract its movie, cast_and_crew, plot, plot_keywords, company, parental_guide, techincal_spec, release_info, taglines, external_sites, user_reviews for you

### IMDb Movie Information

You may also provide configuration parameters like titleid to create an instance of the IMDb class.

```Python
>>> from imdby.imdb import imdb

>>> details = imdb('tt4154796')
```

Every IMDb movie source has a set of infos like.

- Basic Movie Information
- Plot
- Plot Keywords
- Cast and Crew
- Company
- Release Info
- Taglines
- Parental Guide
- Technical Spec

The output of details directory.

![dir](https://user-images.githubusercontent.com/47944792/58303052-eb5d2180-7e0b-11e9-82c1-14627ee73ca3.PNG)

**Example of Extracting Movie Title**

```Python
>>> details.title

'Avengers: Endgame'
```

### External Sites Info

You may also provide configuration parameters like titleid to create an instance of the IMDb class.

```Python
>>> from imdby.external_sites import imdb

>>> external_sites = imdb('tt4154796')
```

Every IMDb movie external_sites source has a set of infos like.

- Official Sites
- Miscellaneous Sites
- Photographs
- Video Clips and Trailers

The output of external_sites directory.

![esdir](https://user-images.githubusercontent.com/47944792/58304230-0da56e00-7e11-11e9-8b3a-823f4cbff1d6.PNG)

**Example of Extracting Movie Official Sites**

```Python
>>> external_sites.official_sites_df.head()
```
![esdf](https://user-images.githubusercontent.com/47944792/58304291-48a7a180-7e11-11e9-9f7f-2ab1c252ec0e.PNG)

### User Reviews Info

You may also provide configuration parameters like titleid to create an instance of the IMDb class.

```Python
>>> from imdby.user_reviews import imdb

>>> user_reviews = imdb('tt4154796')
```

Every IMDb movie user_reviews source has a set of infos like.

- User Reviews
- User Reviews Sentiment Analysis

The output of user_reviews directory.

![urdir](https://user-images.githubusercontent.com/47944792/58304429-d2576f00-7e11-11e9-9d92-6c1ee010d003.PNG)

**Example of Extracting User Reviews for the Movie**

```Python
>>> user_reviews.user_reviews_df.head()
```
![urdf](https://user-images.githubusercontent.com/47944792/58304563-72ad9380-7e12-11e9-99cd-7a1fae184905.PNG)

### Critic Reviews Info

You may also provide configuration parameters like titleid to create an instance of the IMDb class.

```Python
>>> from imdby.critic_reviews import imdb

>>> critic_reviews = imdb('tt4154796')
```

Every IMDb movie critic_reviews source has a set of infos like.

- User Reviews

The output of critic_reviews directory.

![crdir](https://user-images.githubusercontent.com/47944792/58313533-6a158700-7e2b-11e9-8f82-401994d728e3.PNG)

**Example of Extracting Critic Reviews for the Movie**

```Python
>>> critic_reviews.critic_reviews_df.head()
```
![crdf](https://user-images.githubusercontent.com/47944792/58313556-7a2d6680-7e2b-11e9-99b0-4bc1e0d115a6.PNG)

### Search Person Name & Person ID

You may also provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.search_person import imdb

>>> person = imdb('mouli')
```
**Manual Person Name selection done**

![pse](https://user-images.githubusercontent.com/47944792/58333901-0b1c3600-7e5c-11e9-846e-e5139aa8ae51.PNG)

IMDb movie search person source has a set of infos like.

- Person Name
- Person ID

The output of search_person directory.

```Python
>>> print(dir(person))
```

![pdir](https://user-images.githubusercontent.com/47944792/58333783-d5774d00-7e5b-11e9-8848-ef9dd3dce671.PNG)

**Example of Extracting Person Name & Person ID**

```Python
>>> person.person_name

'S.S. Rajamouli'

>>> person.person_id

'nm1442514'
```

### Search Title Name & Title ID

You may also provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.search_title import imdb

>>> title = imdb('entiran')
```
**Manual Title Name selection done**

![tse](https://user-images.githubusercontent.com/47944792/58334200-a7ded380-7e5c-11e9-87f9-709c24fb3634.PNG)

IMDb movie search title source has a set of infos like.

- Title Name
- Title ID

The output of search_title directory.

```Python
>>> print(dir(title))
```

![tdir](https://user-images.githubusercontent.com/47944792/58334175-9bf31180-7e5c-11e9-8e67-f7a4f94d8a5a.PNG)

**Example of Extracting Title Name & Title ID**

```Python
>>> title.title_name

'Enthiran'

>>> title.title_id

'tt1305797'
```

### Search Company Name & Company ID

You may also provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.search_company import imdb

>>> company = imdb('warner')
```
**Manual Title Name selection done**

![cse](https://user-images.githubusercontent.com/47944792/58334557-6d296b00-7e5d-11e9-92f9-dd888f0b0284.PNG)

IMDb movie search company source has a set of infos like.

- Company Name
- Company ID

The output of search_company directory.

```Python
>>> print(dir(company))
```

![cdir](https://user-images.githubusercontent.com/47944792/58334535-64389980-7e5d-11e9-8fe8-5cdb8d800111.PNG)

**Example of Extracting Company Name & Company ID**

```Python
>>> company.company_name

'Warner'

>>> company.company_id

'co0423665'
```

### Upcoming Releases for Selected Regions

You won't need to provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.upcompany_releases import imdb

>>> upcompany_releases = imdb()
```
**Manual Country Name selection done**

![urse](https://user-images.githubusercontent.com/47944792/58538033-e506e500-8211-11e9-9dc0-b76e6fdd9214.PNG)

Upcoming Releases has a set of info. & DataFrames like.

- Country Name
- Country Code
- Upcoming Releases df

The output of upcompany_releases directory.

```Python
>>> print(dir(upcompany_releases))
```

![ucrdir](https://user-images.githubusercontent.com/47944792/58538621-24820100-8213-11e9-9996-55be8797e0ab.PNG)

**Example of Extracting Country Name & Country Code**

```Python
>>> upcompany_releases.country_name

'India'

>>> upcompany_releases.country_code

'in'
```

**Example of Extraction Upcoming Release for India DataFrame**

```Python
>>> upcompany_releases.upcompany_releases_df.head()
```

![ucrdf](https://user-images.githubusercontent.com/47944792/58538310-7d04ce80-8212-11e9-9344-83e0cc5d2526.PNG)

### Trending Now in India

You won't need to provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.trending_now_in_india import imdb

>>> trending_now_in_india = imdb()
```
Trending Now in India has a set of Data Frames like.

- Popular Global
- Popular India
- Popular Tamil
- Popular Telugu
- Popular Hindi

The output of trending_now_in_india directory.

```Python
>>> print(dir(trending_now_in_india))
```

![tredir](https://user-images.githubusercontent.com/47944792/58555910-59ed1580-8238-11e9-81cf-2adadbaaacd5.PNG)

**Example of Extracting Tamil Trending Movies URL**

```Python
>>> trending_now_in_india.popular_tamil_url

'https://www.imdb.com/india/tamil'
```

**Example of Extraction Trending Tamil Movies DataFrame**

```Python
>>> trending_now_in_india.popular_tamil_movies_df
```

![tadf](https://user-images.githubusercontent.com/47944792/58556177-f57e8600-8238-11e9-83e5-ce70e6575d01.PNG)

### IMDb Charts

You won't need to provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.imdb_charts import imdb

>>> imdb_charts = imdb()
```
IMDb Charts has a set of Data Frames like.

- Top Rated Movies
- Top Rated English Movies
- Top Rates TV Shows
- Lowest Rated Movies
- Most Popular Movies
- Most Popular TV Shows

The output of imdb_charts directory.

```Python
>>> print(dir(imdb_charts))
```

![icdir](https://user-images.githubusercontent.com/47944792/58540048-40d36d00-8216-11e9-8e55-62bbaa0a7843.PNG)

**Example of Extracting Top Box Office Movies URL**

```Python
>>> imdb_charts.top_box_office_us_url

'https://www.imdb.com/chart/boxoffice'
```

**Example of Extraction Top Box Office DataFrame**

```Python
>>> imdb_charts.top_rated_english_movies_df
```

![icbdf](https://user-images.githubusercontent.com/47944792/58556283-3f676c00-8239-11e9-9c62-df0120699372.PNG)

### Top India Charts

You won't need to provide configuration parameters like text to create an instance of the IMDb class.

```Python
>>> from imdby.top_india_charts import imdb

>>> top_india_charts = imdb()
```
Top India Charts has a set of Data Frames like.

- Top Rated Indian Movies
- Top Rated Tamil Movies
- Top Rated Malayalam Movies
- Top Rated Telugu Movies

The output of top_india_charts directory.

```Python
>>> print(dir(top_india_charts))
```

![tidir](https://user-images.githubusercontent.com/47944792/58556589-ffed4f80-8239-11e9-9a52-7940223fc778.PNG)

**Example of Extracting Top Rated Tamil Movies URL**

```Python
>>> top_india_charts.top_rated_tamil_movies_url

'https://www.imdb.com/india/top-rated-tamil-movies'
```

**Example of Extraction Top Rated Tamil Movies DataFrame**

```Python
>>> top_india_charts.top_rated_tamil_movies_df.head()
```

![tidf](https://user-images.githubusercontent.com/47944792/58556603-08de2100-823a-11e9-81be-a8212bc465c5.PNG)
