import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    const partners = props.partners.map(partners => {
        return (
            <Media tag="li" key={partners.id}>
                <RenderPartner partner={partners} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>More about Ignition Fire Troupe</h3>
                    <p>IGNITION, the original Medieval Fusion Fire Troupe is a collection of talented martial artists, dancers, and witty entertainers molded into a fire performance troupe based in Seattle, Wa. Our troupe combines the daring fire arts with our eclectic and passionate spirits to bring you a diverse and dedicated family of performers. We are constantly committed to evolving and growing in order to deliver visually brilliant, high-quality performances for all ages fused with spectacular fire breathing, poi, staff, whips, batons, hoops, martial arts choreography, interpretive dance and acrobatics.</p>
                    <p>
                    'An eclectic menagerie of heavy metal, tribal, medieval, jungle, fusion, with leather and steel.'</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">2010</dd>
                                <dt className="col-6">Fire governance</dt>
                                <dd className="col-6">We work closely with local fire marshals and carry an annual fire permit with the City of Seattle. IGNITION maintains strict standards of fire safety, and are trained professionals. </dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">PLEASE DO NOT TRY THIS ON YOUR OWN.</dt>

                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>{partner.name}</Media>
                    <p>
                        {partner.description}
                    </p>
                </Media>
            </React.Fragment>
        );
    } return (
        <div />
    )

}

export default About;