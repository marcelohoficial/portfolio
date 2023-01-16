const title = 'Marcelo Henrique - Portfólio.'
const description = 'Em desenvolvimento.'

const SEO = {
  title,
  description,
  canonical: 'https://github.com/marcelohoficial/portfolio',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://github.com/marcelohoficial/portfolio',
    title,
    description,
    images: [
      {
        url: 'https://github.com/marcelohoficial/portfolio/qcb.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;