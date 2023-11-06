const Banner = ({ BannerImg, Titre, Interet1, Interet2, Interet3, texte }) => {
    return (
        <div className="hero">
            <img className="bannerimg" src={BannerImg} alt="Banière" />
            <section className="hero-content">
                <h2 className="sr-only">{Titre}</h2>
                <p className="subtitle">{Interet1}</p>
                <p className="subtitle">{Interet2}</p>
                <p className="subtitle">{Interet3}</p>
                <p className="text">{texte}</p>
            </section>
        </div>
    )
};
export default Banner;
