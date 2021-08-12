import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReactMarkdown from "react-markdown";
import { projet } from "../../data/projet";
import { Link } from "react-router-dom";
import "./index.css";

export const Works = () => {

  
  return (
    <>
    <div className="works">
      <h1>Works</h1>
      <ReactMarkdown>
        ### Au fil des années, nous avons pu accompagner les meilleurs.
        Découvrez pas à pas comment nous avons été présent pour lancer vos
        marques préférées.
      </ReactMarkdown>
      <ul>
        {projet.map((projet, index) => (
          <li>
            <Card>
              <CardContent>
                <Link key={index}to={`/works/${projet.slug}`}>{projet.author}</Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
