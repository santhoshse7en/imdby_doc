## Quickstart

Eager to get started? This page gives a good introduction in how to get started with imdby. This assumes you already have imdby installed. If you do not, head over to the Installation section.

### Building a IMDb source

Source objects are an abstraction of online multi-media content websites [IMDb](https://www.imdb.com/)

Building a Source will extract its movie, cast_and_crew, plot, plot_keywords, company, parental_guide for you

You may also provide configuration parameters like titleid to create an instance of the IMDb class.

```Python
>>> from imdby.imdb import imdb

>>> details = imdb('tt4154796')
```

Every IMDb movie source has a set of infos like.

- Title                                                                         
- Title ID
- Rating
- Metascore
- Budget
- Genre
- Plot
- Gross USA

and soon...

The following examples assume that a titleid has been initialized and built directory.

![dir](https://user-images.githubusercontent.com/47944792/58084265-2b3bc300-7bd8-11e9-9169-cc60542593f1.PNG)

## Extracting Information

```Python
>>> details.title

'Avengers: Endgame'
```
