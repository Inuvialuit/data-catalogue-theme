---
title: "Home"
description: "Data Catalog for the Inuvialuit Regional Corporation. Find socioeconomic, environmental and physical sciences data about the Inuvialuit Settlement Region here."

# banner
banner:
  title: "Data Catalog"
  button: "Get Premium Version"
  button_link: "https://gethugothemes.com/products/andromeda/"
  image: "images/banner-app.png"


# brands
brands_carousel:
  enable: true
  brand_images:
  - "images/brands/01-ccadi.png"
  - "images/brands/02-cfi.png"
  - "images/brands/03-nrcan.jpg"
  - "images/brands/04-arcticnet.png"
  - "images/brands/05-polar-knowledge-canada.png"


# features
features:
  enable: true
  subtitle: "Features"
  title: "Ways to use the <br> data in this catalog"
  description: "Access the catalog through"
  features_blocks:
  - icon: "las la-search"
    title: "Search"
    content: "[Search](/search/) for datasets and repositories by full text search and keyword"
  - icon: "las la-code"
    title: "Intake API"
    content: |
      Use the [intake](https://intake.readthedocs.io/en/latest/) library to download data

      ```python
      from intake import open_catalog

      url = "https://datacatalogirc.blob.core.windows.net/data/catalog.yml"
      cat = open_catalog(url)
      ```
  - icon: "las la-network-wired"
    title: "Federated Search"
    content: "Search across many data catalogs using [Polder federated search](https://search.polder.info/)"
  - icon: "las la-sitemap"
    title: "Indexable"
    content: "Easily extract metadata from the site using the [sitemap](https://www.sitemaps.org/protocol.html) and embedded [Schema.org](https://schema.org) JSON-LD"

# intro_video
intro_video:   
  enable: false
  subtitle: "Short Intro Video"
  title: "Built exclusively for you"
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas <br> Werat viverra id et aliquet. vulputate egestas sollicitudin."
  video_url: "https://www.youtube.com/embed/dyZcRRWiuuw"
  video_thumbnail: "images/video-popup.jpg"


# how_it_works
how_it_works:   
  enable: false
  block:
  - subtitle: "Primary Speciality"
    title: "You Will Not miss Your All misunderstandings"
    description: "Protect your design vision and leave nothing up to interpretation with interaction recipes. Quickly share and access all your team members interactions by using libraries, ensuring consistency throughout the."
    image: "images/features-01.png"

  - subtitle: "Secondary Speciality"
    title: "Say hello to no-code The Advance Creation"
    description: "From the simplest of interactions to those that use Excel-gradeing formulas, ProtoPie can handle them all. Make mind-blowing of New interactions everyday without ever having to write any new code."
    image: "images/features-02.png"
---
