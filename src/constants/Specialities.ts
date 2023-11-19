export const specialtiesData = [

  // Anesthesie
  {
    id:1,
    name: "anesthesie",
    image: "/assets/img/anest.svg",
    diseasesLink: "/specialities/anesthesie",
    diseases: [
      {
        id:1,
        name: "Aldrete Score",
        
        questions:[
          {
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
          }, {
          title:"Respiration",
          responses: [
            { title: "0-Année", value: "1" },
            { title: "1-Ventilation superficielle , dyspnée", value: "1" },
            { title: "2 - Ventilation profonde, toux efficace.", value: "1" }
          ]
          }, {
          title:"Variation de la PA systolique",
          responses: [
            { title: "0 - PA ± 50 %.", value: "1" },
            { title: "1 - PA ± 20-50 %.", value: "1" },
            { title: "1 - PA ± 20 %.", value: "1" }
          ]
          },{
          title:"Conscience",
          responses: [
            { title: "0-Aréactif", value: "1" },
            { title: "1 - Réactif à la demande.", value: "1" },
            { title: "	2 - Réveillé.", value: "1" }
          ]
          },{
          title:"Coloration",
          responses: [
            { title: "0 - Cyanosé.", value: "1" },
            { title: "1 - Pâle, grisâtre.", value: "1" },
            { title: "	2 - Normale.", value: "1" }
          ]
          },{
          title:"Saturation en 02",
          responses: [
            { title: "0 - SpO2 < 90% malgré l'apport d'oxygène.", value: "1" },
            { title: "1 - SpO2 > 90% grâce à l'apport d'oxygène.", value: "1" },
            { title: "	2 - SpO2 > 92 % à l'air ambiant.", value: "1" }
          ]
          },
        ]
      },
      {
        id: 2,
        name: "Apfel Score",
        questions: [
            {
            title: "Facteurs de risque",
            responses: [
              { title: "Patient de sexe féminin.", value: "1" },
              { title: "Patient non fumeur.", value: "1" },
              { title: "Morphiniques administrés en post-opératoire.", value: "1" },
              { title: "Antécédent de nausées ou vomissements post-opératoires ou de mal des transports.", value: "1" }
              
            ]
            }
          ]
      }, {
        id:3,
        name: "Ariscate Score",
        questions: [
          {
          title: "Age",
          responses: [
            { title: "  0 - Age ≥ 50 ans.", value: "1" },
            { title: "  3 - Age ≥ 51 ans et ≤ 80 ans.", value: "1" },
            { title: "16 - Age ≥ 81 ans.", value: "1" }
          ]
          },
          {
          title: "SpO2 pré-opératoire",
          responses: [
            { title: "  0 - SpO2 ≥ 96%.", value: "1" },
            { title: "  8 - SpO2 ≥ 91% et ≤ 95%.", value: "1" },
            { title: "24 - SpO2 ≤ 90%.", value: "1" }
          ]
          },{
          title: "Infection respiratoire dans le mois précédent",
          responses: [
            { title: "  0 - Non.", value: "1" },
            { title: "17 - Oui.", value: "1" }
          ]
          },{
          title: "Anémie pré-opératoire (Hb ≤ 10 g/dl)",
          responses: [
            { title: "  0 - Non.", value: "1" },
            { title: "11 - Oui.", value: "1" }          ]
          },{
          title: "Incision chirurgicale",
          responses: [
            { title: "    0 - Périphérique.", value: "1" },
            { title: "15 - Abdominale supérieure.", value: "1" }  , 
            { title: "24 - Intra-thoracique.", value: "1" }  ,       ]
          },{
          title: "Durée de la chirurgie",
          responses: [
            { title: "   0 - Durée < 2 heures.", value: "1" },
            { title: "16 - Durée ≥ 2 heures et ≤ 3 heures.", value: "1" },
            { title: "16 - Durée ≥ 2 heures et ≤ 3 heures.", value: "1" },       ]

          
          },{
          title: "Procédure d'urgence ",
          responses: [
            { title: "   0 - Non", value: "1" },
            { title: "8 - Oui.", value: "1" },
        
          ]

          
          },

        ]
      }, {
        id:4,
        name: "A.S.A (Score)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id:5,
        name: "CAprini ,v.2005 (Score)",
        questions: [{
          title: "Age",
          responses: [
            { title: "0 - Age ≤ 40 ans.", value: "1" },
            { title: "1 - Age ≥ 41 ans et ≤ 60 ans.", value: "1" },
            { title: "2 - Age ≥ 61 ans et ≤ 74 ans.", value: "1" },
            { title: "3 - Age ≥ 75 ans.", value: "1" },
          ]
        },
        {
          title: "Poids",
          responses: [
            { title: "0 - I.M.C. ≤ 25 kg/m².", value: "1" },
            { title: "1 - I.M.C. > 25 kg/m².", value: "1" },
          ]
        }, {
          title: "Type de chirurgie",
          responses: [
            { title: "0 - Aucune.", value: "1" },
            { title: "1 - Mineure, durée ≤ 45mn.", value: "1" },
            { title: "2 - Majeure, durée > 45mn.", value: "1" },
            { title: "5 - Arthroplastie du membre inférieur.", value: "1" },
          ]
        },{
          title: "Mobilité",
          responses: [
            { title: "0 - Patient non alité.", value: "1" },
            { title: "1 - Patient alité sous traitement non chirurgical.", value: "1" },
            { title: "2 - Patient alité depuis plus de 72 heures.", value: "1" },
          ]
        },{
          title: "Evènements récents (< 1 mois)",
          responses: [
            { title: "1 - Chirurgie majeure.", value: "1" },
            { title: "1 - Insuffisance cardiaque congestive.", value: "1" },
            { title: "1 - Sepsis.", value: "1" },
            { title: "2 - Immobilisation plâtrée.", value: "1" },
            { title: "1 - Maladie pulmonaire grave, y compris pneumopathie.", value: "1" },
            { title: " 2 - Immobilisation plâtrée.", value: "1" },
            { title: "5 - Fracture de la hanche, du bassin ou de la jambe.", value: "1" },
            { title: "5 - Accident vasculaire cérébral.", value: "1" },
            { title: "5 - Traumatismes multiples, polytraumatisé.", value: "1" },
            { title: "5 - Traumatisme médullaire avec paralysie séquellaire.", value: "1" },

          ]
          },{
          title: "Facteurs gynécologiques",
          responses: [
            { title: "1 - Contraception orale ou traitement hormonal susbtitutif.", value: "1" },
            { title: "1 - Antécédent d'avortements spontanés inexpliqués ou à répétion (> 3).", value: "1" },
            { title: "1 - Grossesse ou post-partum (< 1 mois).", value: "1" },
          
          ]
          },{
          title: "Antécédents médicaux",
          responses: [
            { title: "1 - Maladie inflammatoire de l'intestin.", value: "1" },
            { title: "1 - Infarctus du myocarde.", value: "1" },
            { title: "1 - BPCO, fibrose pulmonaire, emphysème ou maladie pulmonaire chronique.", value: "1" },
            { title: "2 - Cancer présent ou passé.", value: "1" },
            { title: "1 - Autre facteur de risque.", value: "1" },
          ]
          },{
          title: "Facteurs de risque circulatoires",
          responses: [
            { title: "1 - Varices et varicosités veineuses.", value: "1" },
            { title: "1 - Oedème des membres inférieurs.", value: "1" },
            { title: "2 - Cathéter veineux central, PICC line, Port à Cath (< 1 mois).", value: "1" },
         
          ]
          },{
          title: "Troubles de la coagulation",
          responses: [
            { title: "3 - Antécédent personnel de thrombose veineuse, embolie pulmonaire.", value: "1" },
            { title: "3 - Antécédents familiaux de thrombose veineuse, embolie pulmonaire.", value: "1" },
            { title: "3 - Mutation du Facteur V de Leiden.", value: "1" },
            { title: "3 - Mutation 20210A de la prothrombine.", value: "1" },
            { title: "3 - Homocystéine Sérique élevée.", value: "1" },
            { title: " 3 - Lupus avec anticoagulant circulant.", value: "1" },
            { title: "3 - Anticorps anticardiolipines.", value: "1" },
            { title: "3 - Thrombocytopénie induite par l'héparine.", value: "1" },
            { title: "3 - Autre thrombophilie congénitale ou acquise.", value: "1" },

          ]
          },
        
        ]
      }, {
        id: 6,
        name: "Cormack et Lehane (Classification)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id:7,
        name: "Delta PP (Calcul)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id :8,
        name: "Lee(Score)",
        questions: [{
          title: "Facteurs de risque :",
          responses: [
            { title: "Chirurgie à risque cardiaque élevé.", value: "1" },
            { title: "Antécédent de cardiopathie ischémique.", value: "1" },
            { title: "Antécédent d'insuffisance cardiaque congestive.", value: "1" },
            { title: "Antécédent de pathologie cérébro-vasculaire (AVC, AIT).", value: "1" },
            { title: "Diabète insulinodépendant.", value: "1" },
            { title: "Insuffisance rénale chronique.", value: "1" },

          ]
        }]
      },
      {
        id:9,
        name: "MACOCHA(Score)",
        questions: [
          {
          title: "Facteurs relatifs au patient",
          responses: [
            { title: "Score de Mallampati classe III ou IV.", value: "1" },
            { title: "Syndrome d'apnée du sommeil.", value: "1" },
            { title: "Mobilité réduite du rachis cervical.", value: "1" },
            { title: "Limitation d'ouverture de bouche < 3 cm.", value: "1" }

          ]
          }, {
          title: "Facteurs relatifs à la pathologie",
          responses: [
            { title: "Coma (Glasgow < 8).", value: "1" },
            { title: "Hypoxémie sévère (SaO2 < 80%).", value: "1" },
          ]
          }, {
          title: "Facteurs relatifs à l'opérateur",
          responses: [
            { title: "Non anesthésiste ou anesthésiste non entraîné.", value: "1" },
          ]
          }
        ]
      }, {
        id:10,
        name: "Mallampati(Score)'",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id:11,
        name: "Ramsay(Echelle)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id:12,
        name: "RASS(Echelle)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      }, {
        id:13,
        name: "Rudkin(Echelle)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }]
      },
      {
        id:14,
        name: "Volume courant de ventilation(adulte)",
        questions: [{
          title: "Motricité spontanée ou à la demande",
          responses: [
            { title: "Immobile", value: "1" },
            { title: "Bouge 2 membre", value: "1" },
            { title: "Bouge 4 membre", value: "1" }
          ]
        }
        ]
      }
    ]
  },
 
  // Brulés
  {
    id: 2,
    name: "Brulés",
    image: "/assets/img/heart.svg",
    diseasesLink: "/specialities/heart",
    diseases: [
      {
        id:1,
        name: "ABSI (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }
        ]
      }, {
        id:2,
        name: "Brulés graves(adultes) :Remplissage",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }
        ]
      }, {
        id: 3,
        name: "Brulés graves (enfants):Remplissage",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }
        ]
      },
      {
        id:4,
        name: "Surface brulée (Lund er Browder)",
        questions: [
          {
            title: "Age approximatif",
            responses: [
              { title: "0 - 12 mois. ", value: "" },
              { title: "1 - 4 ans. ", value: "" },
              { title: "5 - 9 ans. ", value: "" },
              { title: "10 - 14 ans. ", value: "" },
              { title: "15 ans. ", value: "" },
              { title: "Adulte ", value: "" },

            ]
          }, {
            title: "Régions brûlées (2ème et 3ème degrés)",
            responses: [
              { title: "Tête - par moitié", value: "" },
              { title: "Cou", value: "" },
              { title: "Tronc (Antérieur) - par quart", value: "" },
              { title: "Tronc (Postérieur) - par quart", value: "" },
              { title: "Bras", value: "" },
              { title: "Avant-Bras", value: "" },
              { title: "Mains", value: "" },
              { title: "Fesses", value: "" },
              { title: "Organes Génitaux", value: "" },
              { title: "Cuisses", value: "" },
              { title: "Jambes", value: "" },
              { title: "Pieds", value: "" },


            ]
          }
        ]
      },
      {
        id:5,
        name: "Surface brulée (Wallace)",
        questions: [{
          title: "Régions brûlées (2ème et 3ème degrés)",
          responses: [
            { title: "Tête et Cou", value: "" },
            { title: "Thorax", value: "" },
            { title: "Abdomen", value: "" },
            { title: "Dos", value: "" },
            { title: "Membres Supérieurs", value: "" },
            { title: "Organes Génitaux", value: "" },
            { title: "CUisses", value: "" },
            { title: "Jambes + Pied", value: "" },
          ]
        }
        ]
      }
    ]
  },
           
  // CArdiologie
  {
    id:3,
    name: "Cardiologie",
    image: "/assets/img/cardiologie.svg",
    diseasesLink: "/specialities/cardiologie",
    diseases: [
      {
        id: 1,
        name: "4PEPS (Score)",
        questions: [{
          title: "Age",
          responses: [
            { title: "-2 - Age ≤ 49 ans.", value: "" },
            { title: "-1 - Age ≥ 50 ans et ≤ 64 ans.", value: "" },
            { title: " 0 - Age ≥ 65 ans.", value: "" },
          ]
        },{
          title: "Sexe",
          responses: [
            { title: "0 -Femme", value: "" },
            { title: "2 -Homme", value: "" },
          ]
          }, {
            title: "Autres éléments",
            responses: [
              { title: "-1 - Maladie respiratoire chronique.", value: "" },
              { title: "-1 - Fréquence cardiaque < 80/mn.", value: "" },
              { title: " 1 - Douleur thoracique ET dyspnée brutale.", value: "" },
              { title: " 2 - Traitement hormonal oestrogénique.", value: "" },
              { title: " 2 - Histoire personnelle de thrombose embolique veineuse.", value: "" },
              { title: " 2 - Syncope.", value: "" },
              { title: " 2 - Immobilité dans les 4 dernières semaines.", value: "" },
              { title: " 3 - SaO2 < 95%.", value: "" },
              { title: " 3 - Douleur du mollet et/ou oedème unilatéral d'un membre inférieur.", value: "" },
              { title: "  5 - L'embolie pulmonaire est le diagnostic le plus probable.", value: "" },

          ]
        }]
      }, {
        id:2,
        name: "Angine de poitrine, echelle de gradation CCS",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:3,
        name: "Aquitain, TVP (Score)",
        questions: [{
          title: "Critères diagnostics",
          responses: [
            { title: "Sexe masculin.", value: "" },
            { title: "Paralysie ou immobilisation plâtrée d'un membre inférieur.", value: "" }, 
            { title: "Alitement > 3 jours.", value: "" },
            { title: "Augmentation de volume d’un membre inférieur.", value: "" },
            { title: "Douleur d’un membre inférieur.", value: "" },
            { title: "Diagnostic alternatif au moins aussi probable qu'une thrombose veineuse profonde.", value: "" },
          ]
        }]
      }, {
        id:4,
        name: "CHA2DS2-VASc (Score)",
        questions: [{
          title: "CHA2DS2-VASc",
          responses: [
            { title: "Insuffisance cardiaque ou fraction d'éjection diminué.", value: "" },
            { title: "Hypertension artérielle.", value: "" }, { title: "Âge supérieur à 75 ans.", value: "" },
            { title: "Diabète", value: "" }, { title: "Antécédent d'accident vasculaire-cérébral.", value: "" },
            { title: "Antécédent de maladie vasculaire (artériopathie oblitérante des membres inférieurs, infarctus du myocarde...).", value: "" }, { title: "Âge compris entre 65 et 74 ans.", value: "" },
            { title: "Femme.", value: "" },
          ]
        }]
      }, {
        id:5,
        name: "CHADS2 (Score)",
        questions: [{
          title: "CHADS2",
          responses: [
            { title: "Insuffisance cardiaque.", value: "" },
            { title: "Hypertension artérielle.", value: "" },
            { title: "Âge supérieur à 75 ans.", value: "" },
            { title: "Diabète.", value: "" },
            { title: "Antécédent d'accident vasculaire-cérébral.", value: "" },
          ]
        }]
      }, {
        id:6,
        name: "Cheville-Bras (Index)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:7,
        name: "Cornell (ECG, Indice et Produit)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:8,
        name: "CRUSADE (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:9,
        name: "DAPT (Score)",
        questions: [{
          title: "Cochez les items présents :",
          responses: [
            { title: "Age < 65 ans.", value: "" },
            { title: "Age ≥ 65 ans et < 75 ans.", value: "" },
            { title: "Age ≥ 75 ans.", value: "" },
            { title: "Pontage coronarien veineux stenté.", value: "" },
            { title: "Tabagisme actif ou sevré depuis moins d'un an.", value: "" },
            { title: "Diabète.", value: "" },
            { title: "Coronarographie réalisée dans le cadre d'un infarctus aiguë.", value: "" },
            { title: "Diamètre du stent < 3mm.", value: "" },
            { title: "Antécédent d'insuffisance cardiaque ou fraction d'éjection < 30%.", value: "" },
            { title: "Antécédent d'infarctus ou de coronarographie.", value: "" },
            { title: "Stent actif libérant du paclitaxel.", value: "" },
          ]
        }]
      },
      {
        id:10,
        name: "DASI (Duke Index)",
        questions: [{
          title: "Pouvez-vous :",
          responses: [
            { title: "Vous occuper de vous-même ?", value: "" },
            { title: "Marcher en intérieur ?", value: "" }, { title: "Marcher sur le plat autour d'un paté de maisons ?", value: "" },
            { title: "Monter un escalier lou une colline ?", value: "" }, { title: "Faire des travaux modérés à la maison ?", value: "" },
            { title: "Faire des travaux légers à la maison ?", value: "" }, { title: "Courir sur une courte distance ?", value: "" },
            { title: "Faire des travaux lours à la maison ?", value: "" }, { title: "Faire du jardinage ?", value: "" },
            { title: "Avoir des relations sexuelles ?", value: "" }, { title: "Participer à des activités récréatives modérées ?", value: "" },
            { title: "Participer à des activités récréatives modérées ?", value: "" },
            { title: "Participer à des sports épuisants ?", value: "" },


          ]
        }]
      }, {
        id:11,
        name: "EHRA, FA (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:12,
        name: "Elévation ST par Smith (Equation)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 13,
        
        name: "EuroSCORE, Logistique (Score)",
        questions: [{
          title: "Facteurs personnels",
          responses: [
            { title: "Homme", value: "" },
            { title: "Femme", value: "" },
            { title: "Patient BPCO.", value: "" },
            { title: "Artériopathie périphérique.", value: "" },
            { title: "Troubles neurologiques.", value: "" },
            { title: "Chirurgie cardiaque antérieure.", value: "" },
            { title: "Créatininémie préopératoire > 200 µmol/L.", value: "" },
            { title: "Endocardite.", value: "" },
            { title: "Etat préopératoire critique.", value: "" },

          ]
        },{
          title: "Facteurs cardiaques",
          responses: [
            { title: "Angor instable.", value: "" },
            { title: "Fraction d'éjection : 30%-50%.", value: "" },
            { title: "Fraction d'éjection < 30%.", value: "" },
            { title: "Infarctus myocardique récent.", value: "" },
            { title: "PAPS élevée.", value: "" },
           
          ]
        },{
          title: "Facteurs chirurgicaux",
          responses: [
            { title: "Urgence", value: "" },
            { title: "Chirurgie cardiaque associée ou Non aux coronaires.", value: "" },
            { title: "Chirurgie de l'aorte thoracique.", value: "" },
            { title: "Réparation septale postinfarctus.", value: "" },
          ]
        }]
      }, {
        id:14,
        name: "Grace (Score)",
        questions: [{
          title: "Classe Killip",
          responses: [
            { title: "  I - Pas de signe d'insuffisance cardiaque.", value: "" },
            { title: " II - Crépitants, Galop (B3), Signes droits : turgescence jugulaire.", value: "" },
            { title: "III - Oedeme pulmonaire franc.", value: "" },
            { title: "IV - Choc cardiogénique ou hypotension (PAS < 90 mmHg) et signes de vasoconstriction périphérique : Oligurie, Cyanose, sueurs.", value: "" }


          ]
        },{
          title: "Evènements",
          responses: [
            { title: "Arrêt cardiaque à l'admission.", value: "" },
            { title: "Modification du Segment ST.", value: "" },
              { title: "Augmentation des enzymes cardiaques.", value: "" },
          ]
        }]
      }, {
        id:15,
        name: "HAS-BLED (Score)",
        questions: [{
          title: "HAS-BLED",
          responses: [
            { title: "Hypertension artérielle non contrôlée (PAS ≥ 160mmHg).", value: "" },
            { title: "Anomalie fonction rénale (créatinine ≥ 200µmol/l ou transplanatation ou dialyse).", value: "" },
            { title: "Anomalie fonction hépatique (maladie hépatique chronique ou cytolyse ou cholestase).", value: "" },
            { title: "Accident Vasculaire Cérébral (récent).", value: "" },
            { title: "Maladie à risque hémorragie (ulcère, néoplasie, anémie, trouble de coagulation...).", value: "" },
            { title: "INR instable ou élevé.", value: "" },
            { title: "Âge supérieur à 65 ans.", value: "" },
            { title: "Alcoolisme", value: "" },
            { title: "Utilisation de médicaments à action antithrompbotique (aspirine, AINS, héparines...).", value: "" },
                            
          ]
        }]
      }, {
        id:16,
        name: "HEART (Score)",
        questions: [{
          title: "Histoire",
          responses: [
            { title: "0 - Peu ou pas suspecte.", value: "" },
            { title: "1 - Modérément suspecte.", value: "" },
            { title: "2 - Très suspecte.", value: "" },
          ]
        }, {
            title: "ECG",
            responses: [
              { title: "Normal", value: "" },
              { title: "1 - Trouble de repolarisation non spécifique.", value: "" },
              { title: "2 - Sous-décalage ST significatif.", value: "" },
          ]
        },
        {
          title: "Age",
          responses: [
            { title: "0 - Age ≤ 45 ans.", value: "" },
            { title: "1 - Age > 45 ans et < 65 ans.", value: "" },
            { title: "2 - Age ≥ 65 ans.", value: "" },
          ]
        },
        {
          title: "Facteurs de risque",
          responses: [
            { title: "0 - Pas de facteur de risque.", value: "" },
            { title: "1 - 1 à 2 facteurs de risque.", value: "" },
            { title: "2 - Plus de 3 facteurs de risque ou antécédent d'athérosclérose.", value: "" },
          ]
        },
        {
          title: "Troponine",
          responses: [
            { title: "0 - Inférieure à la limite de la normale.", value: "" },
            { title: "1 - Entre 1 et 3 fois la limite de la normale.", value: "" },
           { title: "2 - Trois fois la limite de la normale ou plus.", value: "" },
          ]
        }
        
        ]
      }, {
        id:17,
        name: "Hemorr2hages (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "Maladie rénale ou hépatique.", value: "" },
            { title: "Alcoolisme", value: "" },
            { title: "Cancer actif.", value: "" },
            { title: "Age > 75 ans.", value: "" },
            { title: "Thrombopénie ou fonction plaquettaire altérée.", value: "" },
            { title: "Antécédent d'hémorragie.", value: "" },
            { title: "Hypertension non controlée.", value: "" },
            { title: "Anémie", value: "" },
            { title: "Facteurs génétiques (polymorphismes CYP 2C9).", value: "" },
            { title: "Risque de chute, maladie neurologie ou psychiatrique.", value: "" },
            { title: "Antécédent d'AVC.", value: "" },
          ]
        }]
      }, {
        id:18,
        name: "HERDOO2 (Score)",
        questions: [{
          title: "Symptômes du syndrome post-thrombotique",
          responses: [
            { title: "0 - Non", value: "" },
            { title: "1 - Oui", value: "" },
          ]
        },{
          title: "D-Dimères ≥ 250 µg/L",
          responses: [
            { title: "0 - Non.", value: "" },
            { title: "1 - Oui.", value: "" },
          ]
        },{
          title: "Obésité (IMC ≥ 30 kg/m2)",
          responses: [
            { title: "0 - Non.", value: "" },
            { title: "1 - Oui.", value: "" },
          ]
        },{
          title: "Age ≥ 65 ans",
          responses: [
            { title: "0 - Non", value: "" },
            { title: "1 - Oui", value: "" },
          ]
        }]
      }, {
        id: 19,
        name: "Killip (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:20,
        name: "NYHA (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:21,
        name: "PRECISE-DAPT (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:22,
        name: "Pression artérielle moyenne",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:23,
        name: "QT corrigé",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:24,
        name: "RIETE (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "1 - Age > 75 ans.", value: "" },
            { title: "2 - Cancer métastasé.", value: "" },
            { title: "1 - Immobilité > 4 jours dans les deux mois précédents (patient non chirurgical).", value: "" },
            { title: "1.5 - Saignement majeur dans les 30 derniers jours.", value: "" },
            { title: "1 - TP allongé.", value: "" },
            { title: "1 - Créatininémie > 106 µmol/l (1,2 mg/dl) ou Clearance < 30 ml/min.", value: "" },
            { title: "1 - Plaquettes < 100.000/ml.", value: "" },
            { title: "1 - Anémie (Hb < 13g/dl pour une homme, 12g/dl pour une femme).", value: "" },
             { title: "-1 - Thrombose distale (non proximale).", value: "" },

          ]
        },]
      }, {
        id:25,
        name: "SCORE, risque cardiovasculaire",
        questions: [{
          title: "Sexe",
          responses: [
            { title: "Femme", value: "" },
            { title: "Homme", value: "" },

          ]
        }, {
          id:26,
          title: "Tabac",
          responses: [
            { title: "Non Fumeur.", value: "" },
            { title: "Fumeur", value: "" },

          ]
          }, {
          id :27,
          title: "Risque Pays",
          responses: [
            { title: "Faible", value: "" },
            { title: "Elevé", value: "" },

          ]
          }, {
          id:28,
          title: "Cholestérol",
          responses: [
            { title: "Table Cholestérol Total.", value: "" },
            { title: "Table Cholestérol Total / HDL Cholestérol.", value: "" },

          ]
        }]
      }, {
        id:29,
        name: "St André, TVP (Score)",
        questions: [{
          title: "Critères diagnostics",
          responses: [
            { title: "Cancer actif (ou palliatif).", value: "" },
            { title: "Paralysie ou immobilisation plâtrée d'un membre inférieur.", value: "" },
            { title: "Augmentation de chaleur locale.", value: "" },
            { title: "Œdème unilatéral prenant le godet du côté symptomatique.", value: "" },
            { title: "Collatéralité veineuse superficielle non variqueuse.", value: "" },
            { title: "Autre diagnostic au moins aussi probable que celui thrombose veineuse profonde.", value: "" },
          ]
        }]
      }, {
        id: 30,
        name: "Surface valvulaire selon diamètre et inversement",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:31,
        name: "TIMI coronarographique (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:32,
        name: "TIMI hémorragies (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:33,
        name: "TIMI SCA non ST+ (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:34,
        name: " T.V (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "1 - Onde R initiale en V1.", value: "" },
            { title: "1 - Onde R initiale en V1 ou V2 > 40 ms.", value: "" }, { title: "1 - Décrochés de l'onde S en V1.", value: "" },
            { title: "1 - Onde R initiale en aVR.", value: "" }, { title: "1 - Déflexion intrinsécoïde en DII ≥ 50ms.", value: "" },
            { title: "1 - Absence de complexe RS dans les dérications de V1 à V6.", value: "" },{ title: "2 - Dissociation auriculo-ventriculaire.", value: "" },
          ]
        }]
      }, {
        id: 35,
        name: " Villalta (Score)",
        questions: [{
          title: "Lourdeur",
          responses: [
            { title: "0-Abscent", value: "" },
            { title: "0-Abscent", value: "" },
            { title: "0-Abscent", value: "" },
            { title: "0-Abscent", value: "" },
            { title: "0-Abscent", value: "" },
          ]
        }]
      }, {
        id:36,
        name: " Wells, Phlébite (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "Cancer évolutif au cours des six derniers mois (traitement actif ou palliatif).", value: "" },
            { title: "Paralysie, parésie ou immobilisation récente (par un plâtre) des membres inférieurs.", value: "" }, { title: "", value: "" },
            { title: "Alitement récent de plus de 3 jours ou intervention chirurgicale importante dans les 4 dernières semaines.", value: "" },
            { title: "Douleur à la pression sur le trajet du système veineux profond.", value: "" },
            { title: "Oedème de tout le membre inférieur.", value: "" },
            { title: "Tuméfaction du mollet de plus de 3 cm par rapport au membre sain (mesuré 10 cm sous la tubérosité tibiale).", value: "" },
            { title: "Oedème prenant le godet du coté atteint.", value: "" },
            { title: "Veines collatérales superficielles (non variqueuses) dilatées.", value: "" },
            { title: "Antécédent de thrombose veineuse profonde documentée.", value: "" },
            {title:"Autre diagnostic aussi ou plus probable que celui d'une thombophlébite profonde." ,value:""}
            ]
        }]
      },
    ]
  },
 
  // Chigurie viscérale
  {
    id:4,
    name: "Chigurie viscérale",
    image: "/assets/img/chirugie.svg",
    diseasesLink: "/specialities/chirugie",
    diseases: [
      {
        id:1,
        name: "AFC, résection colorectale (Score)",
        questions: [{
          title: "Critères AFC",
          responses: [
            { title: "Intervention en urgence.", value: "" },
            { title: "Antécédents neurologiques.", value: "" },
            { title: "Perte de poids récente.", value: "" },
            { title: "Age > 70 ans.", value: "" },
                  
          ]
        }]
      }, {
        id:2,
        name: "Alvarado, MANTRELS (Score)",
        questions: [{
          title: "Items présnets",
          responses: [
            { title: "Douleur abdominale du quadrant inférieur droit.", value: "" },
            { title: "Leucocytes > 10 000/mm³.", value: "" },
            { title: "Migration de la douleur.", value: "" },
            { title: "Anorexie ou corps cétoniques dans les urines.", value: "" },
            { title:"Nausées ou vomissements.", value: "" },
            { title: "Douleur à la décompression abdominale.", value: "" },
            { title: " Température > 37,5°C. ", value: "" },
            { title: "Polynucléaires neutrophiles > 75%.", value: "" },

          ]
        }]
      }, {
        id:3,
        name: "Apgar Chirurgical (Score)",
        questions: [{
          title: "Pertes sanguines estimées",
          responses: [
            { title: "0 - Pertes > 1 000 ml.", value: "" },
            { title: "1 - Pertes ≥ 601 ml et ≤ 1 000 ml.", value: "" },
            { title: "2 - Pertes ≥ 101 ml et ≤ 600 ml.", value: "" },
            { title: "3 - Pertes ≤ 100 ml.", value: "" },
          ]
        },{
          title: "Pression artérielle moyenne la plus basse",
          responses: [
            { title: "0 - PAM < 40 mmHg.", value: "" },
            { title: "1 - PAM ≥ 40 mmHg et ≤ 54 mmHg.", value: "" },
            { title: "2 - PAM ≥ 55 mmHg et ≤ 69 mmHg.", value: "" },
            { title: "3 - PAM ≥ 70 mmHg.", value: "" },
          ]
        },{
          title: "Fréquence cardiaque la plus basse*",
          responses: [
            { title: "0 - FC > 85 min*.", value: "" },
            { title: "1 - FC ≥ 76 min et ≤ 85 min.", value: "" },
            { title: "2 - FC ≥ 66 min et ≤ 75 min.", value: "" },
            { title: "3 - FC ≥ 56 min et ≤ 65 min.", value: "" },
            { title: "4 - FC ≤ 55 min.", value: "" },
          ]
        }]
      }, {
        id:4,
        name: "Mannheim Peritonitis Index",
        questions: [{
          title: "Items présents :",
          responses: [
            { title: "Age > 50 ans.", value: "" },
            { title: "Sexe féminin.", value: "" },
            { title: "Défaillance viscérale*.", value: "" },
            { title: "Pathologie maligne.", value: "" },
            { title: "Délai préopératoire > 24 heures.", value: "" },
            { title: "Origine non colique de la péritonite.", value: "" },
            { title: "Péritonite généralisée.", value: "" },
            { title: "Epanchement citrin.", value: "" },
            { title: " Epanchement trouble ou purulent.", value: "" },
            { title: "Péritonite stercorale.", value: "" },
          ]
        }]
      },
      {
        id:5,
        name: "Moore, rate (Classification)",
        questions:
          [{ 
          title: "Type de Service d'Urgences",
          responses: [
            { title: "Service d'Urgences Général / Adulte", value: "" },
            { title: "Service d'Urgences Pédiatrique", value: "" }
          ]
        },{
          title: "Sexe et Âge",
          responses: [
            { title: "Fille - âge ≥ 5 ans et ≤ 7 ans.", value: "" },
            { title: "Fille - âge ≥ 8 ans et ≤ 11 ans.", value: "" },
            { title: "Fille - âge > 11 ans.", value: "" },
            { title: "Garçon - âge ≥ 5 ans et ≤ 7 ans.", value: "" },
            { title: "Garçon - âge ≥ 8 ans et ≤ 13 ans.", value: "" },
            { title: "Garçon - âge > 13 ans.", value: "" },
          ]
        },{
          title: "Globules blancs",
          responses: [
            { title: "Polynucléaires Neutrophiles en valeur absolue.", value: "" },
            { title: "Leucocytes totaux en valeur absolue.", value: "" },
          ]

        },{
          title: "Durée de la douleur",
          responses: [
            { title: "Durée < 24 heures ou inconnue.", value: "" },
            { title: "Durée ≥ 24 heures et < 48 heures.", value: "" },
            { title: "Durée ≥ 48 heures et ≤ 96 heures", value: "" },
            { title: "Durée > 96 heures", value: "" },
          ]
        },{
          title: "Douleur lors de la marche",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
          },
        {
          title: "Douleur lors de la marche",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Défense, maximale en fosse iliaque droite",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Contracture abdominale",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Migration douleur en fosse iliaque droite",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },]
      }, {
        id:6,
        name: "pARC, Appendicite (Score)",
        questions:[{ 
          title: "Type de Service d'Urgences",
          responses: [
            { title: "Service d'Urgences Général / Adulte", value: "" },
            { title: "Service d'Urgences Pédiatrique", value: "" }
          ]
        }, {
          
          title: "Sexe et Âge",
          responses: [
            { title: "Fille - âge ≥ 5 ans et ≤ 7 ans.", value: "" },
            { title: "Fille - âge ≥ 8 ans et ≤ 11 ans.", value: "" },
            { title: "Fille - âge > 11 ans.", value: "" },
            { title: "Garçon - âge ≥ 5 ans et ≤ 7 ans.", value: "" },
            { title: "Garçon - âge ≥ 8 ans et ≤ 13 ans.", value: "" },
            { title: "Garçon - âge > 13 ans.", value: "" },
          ]
        },{
          title: "Globules blancs",
          responses: [
            { title: "Polynucléaires Neutrophiles en valeur absolue.", value: "" },
            { title: "Leucocytes totaux en valeur absolue.", value: "" },
          ]

        },{
          title: "Durée de la douleur",
          responses: [
            { title: "Durée < 24 heures ou inconnue.", value: "" },
            { title: "Durée ≥ 24 heures et < 48 heures.", value: "" },
            { title: "Durée ≥ 48 heures et ≤ 96 heures", value: "" },
            { title: "Durée > 96 heures", value: "" },
          ]
        },{
          title: "Douleur lors de la marche",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
          },
        {
          title: "Douleur lors de la marche",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Défense, maximale en fosse iliaque droite",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Contracture abdominale",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },{
          title: "Migration douleur en fosse iliaque droite",
          responses: [
            { title: "Non", value: "" },
              { title: "Oui", value: "" },
          ]
        },]
      }, {
        id:7,
        name: "PAS, Pediatric Appendicitis Score (Score)",
        questions: [{
          title: "Items présents :",
          responses: [
            { title: "Douleur abdominale du quadrant inférieur droit lors de la toux ou la percussion abdominale.", value: "" },
            { title: "Leucocytes > 10 000/mm³.", value: "" },
            { title: "Migration de la douleur.", value: "" },
            { title: "Anorexie", value: "" },
            { title: "Nausées ou vomissements.", value: "" },
            { title: "Sensibilité de la fosse iliaque droite.", value: "" },
            { title: "Fièvre.", value: "" },
            { title: "Polynucléaires neutrophiles > 75%.", value: "" },

          ]
        }]
      }, {
        id:8,
        name: "Volume hépatique total (Vauthey)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      },
    ]
  },
    
    
  // Dermatologie
  {
    id: 5,
    name: "Dermatologie",
    image: "/assets/img/derma.svg",
    diseasesLink: "/specialities/dermatologie",
    diseases: [
      {
        id:1,
        name: "Braden (Echelle)",
        questions: [{
          title: "Communication et perception sensorielle",
          responses: [
            { title: "4 - Aucune diminution: répond aux commandes verbales. N'a aucun déficit sensoriel qui limite sa capacité à sentir et à exprimer sa douleur et son inconfort.", value: "" },
            { title: "	3 - Légèrement diminué : répond aux commandes verbales, mais ne peut pas toujours communiquer son inconfort ou son besoin d'être tourné, OU a une sensibilité diminuée qui limite sa capacité à sentir la douleur ou l'inconfort à l'un des deux membres inférieurs ou aux deux.", value: "" },
            { title: "2 - Très limité : répond seulement à la douleur. Ne peut communiquer son inconfort excepté par des plaintes ou de l'agitation, OU altération de la sensibilité qui limite la capacité à sentir la douleur ou l'inconfort sur la moitié du corps.", value: "" },
            { title: "1 - Complètement limité : aucune réaction (plainte, action) à la douleur, due à une diminution de la conscience ou aux effets de sédatifs, OU incapacité à sentir la douleur presque sur toute la surface du corps.", value: "" },
          ]
        },{
          title: "Humidité",
          responses: [
            { title: "4 - Rarement humide : la peau est généralement sèche ; la literie est changée selon les habitudes de l'équipe.", value: "" },
            { title: "3 - Humidité occasionnelle : la peau est occasionnellement humide, un changement de la literie est nécessaire environ une fois par jour.", value: "" },
            { title: "2 - Humide : la peau est souvent mais pas toujours humide. La literie doit être changée au moins une fois par équipe.", value: "" },
            { title: "1 - Complètement limité : aucune réaction (plainte, action) à la douleur, due à une diminution de la conscience ou aux effets de sédatifs, OU incapacité à sentir la douleur presque sur toute la surface du corps.", value: "" },
          ]
          },{
          title: "Activité",
          responses: [
            
            { title: "4 - Marche fréquemment : marche en dehors de sa chambre au moins 2 fois par jour et dans sa chambre au moins une fois toutes les 2 heures durant la journée.", value: "" },
            { title: "3 - Marche occasionnellement : marche occasionnellement durant la journée mais sur de petites distances avec ou sans aide. Passe la grande majorité du temps au lit ou au fauteuil.", value: "" },
            { title: "2 - Au fauteuil : capacité à marcher très limitée ou inexistante. Ne peut supporter son propre poids et/ou doit être aidé au fauteuil ou fauteuil roulant.", value: "" },
            { title: "1 - Alité : confiné au lit.", value: "" },
          ]
          },{
          title: "Mobilité",
          responses: [
            { title: "4 - Aucune limitation : effectue des changements de position majeurs et fréquents sans aide.", value: "" },
            { title: "3 - Légèrement limité : effectue seul de fréquents petits changements de position du corps et de ses extrémités.", value: "" },
            { title: "2 - Très limité : effectue occasionnellement de légers changements de position du corps et de ses extrémités mais incapacité à effectuer de manière autonome de fréquents et importants changements de position.", value: "" },
            { title: "1 - Complètement immobile : ne peut effectuer le moindre changement de position du corps ou de ses extrémités sans aide.", value: "" },
                  
          ]
        },{
          title: "Nutrition",
          responses: [
            { title: "4 - Excellente : mange presque la totalité de chaque repas. Ne refuse jamais un repas. Prend habituellement au moins quatre rations de viande ou de produits laitiers par jour. Mange occasionnellement entre les repas. Ne requiert aucun supplément alimentaire.", value: "" },
            { title: "3 - Adéquate : mange plus de la moitié des repas. Mange 4 rations de protéines (viande, produits laitiers) par jour. Refuse occasionnellement un repas, mais génèralement prend un supplément alimentaire s'il est proposé, OU est alimenté par sonde ou nutrition parentérale, adaptée à la plupart de ses besoins nutritionnels.", value: "" },
            { title: "2 - Probablement inadéquate : mange rarement un repas complet et mange en général seulement la moitié des aliments proposés. Prend seulement 3 rations de viande ou des produits laitiers par jour. Peut prendre occasionnellement un supplément diététique, OU reçoit moins que la quantité optimale requise par un régime liquide ou par sonde.", value: "" },
            { title: "1 - Très pauvre : ne mange jamais un repas complet. Mange rarement plus du tiers des aliments proposés. Mange 2 rations de protéines ou moins par jour (viande ou produits laitiers). Boit peu. Ne prend pas de suppléments alimentaires liquides, OU est à jeun et/ou est hydraté par voie orale ou intraveineuse depuis plus de cinq jours.", value: "" },                    
          ]
        },{
          title: "Friction et cisaillement",
          responses: [
            { title: "3 - Aucun problème apparent : se mobilise seul au lit et au fauteuil et a suffisamment de force musculaire pour se soulever complètement durant le transfert. Garde en tout temps une bonne position au lit et au fauteuil.", value: "" },
            { title: "2 - Problème potentiel : se mobilise difficilement ou requiert un minimum d'aide pour le faire. Durant le transfert, la peau glisse contre les draps, la chaise, les contentions ou autres appareillages. Garde la plupart du temps une relative bonne position au fauteuil ou au lit, mais glisse occasionnellement vers le bas.", value: "" },
            { title: "1 - Problème : requiert une assistance modérée à complète pour se mobiliser. Se relever complètement dans le lit sans glisser sur les draps est impossible. Glisse fréquemment dans le lit ou le fauteuil, nécessite de fréquents repositionnements avec un maximum d'aide. Spasticité, contractures, ou agitation provoquent presque constamment des frictions.", value: "" },
          ]
        }]
      }, {
        id:2,
        name: "DLQI (Questionnaire)",
        questions: [{
          title: "1... Votre peau vous a-t-elle démangé(e)/gratté(e), fait souffrir ou brûlé(e) ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "2... Vous êtes vous senti(e) gêné(e) ou complexé(e) par votre problème de peau ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "3... Votre problème de peau vous a-t-il gêné(e) pour faire vos courses, vous occuper de votre maison ou pour jardiner ?",
          responses:  [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "4... Votre problème de peau vous a-t-il influencé(e) dans le choix des vêtements que vous portiez ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "5... Votre problème de peau a-t-il affecté vos activités avec les autres ou vos loisirs ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "6... Avez-vous eu du mal à faire du sport à cause de votre problème de peau ?",
          responses:  [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "7... votre problème de peau vous a-t-il complètement empêché(e) de travailler ou d'étudier ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "8... Votre problème de peau a-t-il rendu difficiles vos relations avec votre conjoint(e), vos amis proches ou votre famille ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "9... Votre problème de peau a-t-il rendu votre vie sexuelle difficile ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },{
          title: "10... Le traitement que vous utilisez pour votre peau a-t-il été un problème, par exemple en prenant trop de votre temps ou en salissant votre maison ?",
          responses: [
            { title: "Enormément.", value: "" },
            { title: "Beaucoup.", value: "" },
            { title: "Un peu.", value: "" },
            { title: "Pas du tout.", value: "" },
          ]
        },]
      }, {
        id:2,
        name: "Norton (Echelle)",
        questions: [{
          title: "Condition physique",
          responses: [
            { title: "4 - Bon: état clinique stable, paraît en bonne santé et bien nourri.", value: "" },
            { title: "3 - Moyen : état clinique généralement stable, paraît en bonne santé.", value: "" },
            { title: "2 - Mauvais : état clinique instable, en mauvaise santé.", value: "" },
            { title: "1 - Très mauvais : état clinique critique ou précaire.", value: "" }, 
          ]
        },{
          title:"Etat mental",
          responses: [
            { title: "4 - Bon : orienté, a conscience de son environnement.", value: "" },
            { title: "3 - Apathique : orienté (2 fois sur 3), passif.", value: "" },
            { title: "2 - Confus : orienté (1 fois sur 2) conversation quelquefois inappropriée.", value: "" },
            { title : "1 - Inconscient : généralement difficile à stimuler, léthargique." ,value:""},
          ]
          },
          {
            title: "Activité autonome",
            responses: [
              { title: "4 - Ambulant : capable de marcher de manière indépendante (inclut la marche avec canne).", value: "" },
              { title: "3 - Marche avec Aide : incapable de marcher sans aide humaine.", value: "" },
              { title: "2 - Assis au Fauteuil : marche seulement pour aller au fauteuil, confiné au fauteuil à cause de son état et/ou sur prescription médicale.", value: "" },
              { title : "1 - Alité : confiné au lit en raison de son état et/ou sur prescription médicale." ,value:""},
          ]
        },{
          title: "Mobilité",
          responses: [
            { title: "4 - Totale : bouge et contrôle tous ses membres volontairement, indépendant pour se mobiliser.", value: "" },
            { title: "3 - Diminuée : capable de bouger et de contrôler ses membres, mais avec quelques degrés de limitation, a besoin d'aide pour changer de position.", value: "" },
            { title: "2 - Très limitée : incapable de changer de position sans aide, offre peu d 'aide pour bouger, paralysie, contractures.", value: "" },
            { title: "1 - Immobile : incapable de bouger, de changer de position.", value: "" },
          ]
        },{
          title: "Incontinence",
          responses: [
            { title: "4 - Aucune : contrôle total des intestins et de la vessie, ou présence d'une sonde urinaire.", value: "" },
            { title: "3 - Occasionnelle : a de 1 à 2 incontinences d'urine ou de selles /24 h, a une sonde urinaire ou un Pénilex mais a une incontinence fécale.", value: "" },
            { title: "2 - Urinaire ou Fécale : a de 3 à 6 incontinences urinaires ou diarrhéiques dans les 24h.", value: "" },
            { title : "1 - Urinaire et Fécale : ne contrôle ni intestins ni vessie, a de 7 à 10 incontinences par 24h." ,value:""},
          ]
        }]
      }, {
        name: "PASI (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:3,
        name: "Skene (Indice)",
        questions: [{
          title: "Age",
          responses: [
            { title: "0 - Age < 52 ans.", value: "" },
            { title: "1 - Age ≥ 52 ans et ≤ 86 ans.", value: "" },
              { title: "2 - Age > 86 ans.", value: "" },
          ]
        },{
          title: "Ancienneté de la plaie",
          responses: [
            { title: "0 - Ancienneté < 2 mois.", value: "" },
            { title: "1 - Ancienneté ≥ 2 mois et ≤ 31 mois.", value: "" },
            { title: "2 - Ancienneté > 31 mois.", value: "" }

          ]
          },{
          title: "Surface (Diamètre Ø)",
          responses: [
            { title: "0 - Surface < 1,7 cm²(Ø < 1,5 cm).            ", value: "" },
            { title: "1 - Surface ≥ 1,7 cm² et < 4,9 cm²(Ø ≥ 1,5 cm et < 2,5 cm).", value: "" },
            { title: "2 - Surface ≥ 4,9 cm² et < 14,2 cm²(Ø ≥ 2,5 cm et < 4,2 cm)", value: "" },
            { title: "3 - Surface ≥ 14,2 cm² et < 40,9 cm²(Ø ≥ 4,2 cm et < 7,2 cm).", value: "" },
            { title: "4 - Surface ≥ 40,9 cm² et < 118,3 cm²(Ø ≥ 7,2 cm et < 12,3 cm).", value: "" },
            { title: "	5 - Surface ≥ 118,3 cm²(Ø ≥ 12,3 cm).", value: "" },
          ]
        },{
          title: "Sequelle de Thrombose Veineuse Profonde",
          responses: [
            { title: "0 - Non", value: "" },
            { title: "1 - Oui", value: "" }

          ]
        }]
      }, {
        id:4,
        name: "WIfI (Classification)",
        questions: [{
          title: "Plaie (Wound)",
          responses: [
            { title: "0 - Pas d’ulcère (douleur de décubitus seulement).", value: "" },
            { title: "1 - Ulcère petit, superficiel, sur le pied ou la jambe distale, sans nécrose.", value: "" },
            { title: "2 - Ulcère plus profond, exposant os, articulation ou tendon ± nécrose limitée aux orteils.", value: "" },
            { title: "3 - Ulcère profond, extensif ± nécrose extensive.", value: "" },
               
          ]
        },
        {
          title: "Ischémie (Ischemia)",
          responses: [
            { title: "	0 - ICB ≥ 0,80.0 - PC > 100 mmHg.0 - PO ≥ 60 mmHg;", value: "" },
            { title: "	1 - ICB ≥ 0,60 et ICP ≤ 0,79.1 - PC > 70 mmHg et PC ≤ 100 mmHg.1 - PO ≥ 40 mmHg; et PO ≤ 59 mmHg.", value: "" },
            { title: "2 - ICB ≥ 0,40 et ICP ≤ 0,59.2 - PC > 50 mmHg et PC ≤ 70 mmHg.2 - PO ≥ 30 mmHg; et PO ≤ 39 mmHg.", value: "" },
            { title: "3 - ICB ≤ 39.3 - PC < 50 mmHg.3 - PO < 30 mmHg;", value: "" },
          ]
          },
        {
          title: "Infection (Foot Infection)",
          responses: [
            { title: "0 - Pas de signe / symptôme d’infection.", value: "" },
            { title:" 1 - Infection locale, impliquant seulement la peau et les tissus sous-cutanés.", value: "" },
            { title: "2 - Infection locale impliquant des tissus sous-cutanés / profonds.", value: "" },
            { title: "3 - Syndrome de réponse inflammatoire systémique.", value: "" },
          ]
        }]
      },
    ]
  },// Divers
  {
    id:6,
    name: "Divers",
    image: "/assets/img/divers.svg",
    diseasesLink: "/specialities/divers",
    diseases: [
      {
        id:1,
        name: "ALD 30 (Liste) [France]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:2,
        name: "Conversion d'Unités",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:3,
        name: "Corticoïdes, Conversion",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:4,
        name: "Durée",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:5,
        name: "EPICES (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:6,
        name: "Maladies à déclaration obligatoire [France]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:7,
        name: "Maladies à déclaration obligatoire [Québec]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 8,
        name: "Maladies à déclaration obligatoire [Suisse]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:9,
        name: "Maladies à déclaration obligatoire [Tunisie]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 10,
        name: " NIR, calcul clé [France]",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 11,
        name: " Valeurs biologiques usuelles",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      },
    ]
  },// Gériatrie
  {
    id:7,
    name: "Gériatrie",
    image: "/assets/img/geriatrie.svg",
    diseasesLink: "/specialities/geriatirie",
    diseases: [
      {
        id:1,
        name: "ADL de Katz (Echelle)",
        questions: [{
          title: "Hygiène Corporelle",
          responses: [
            { title: "   1 - Autonome.", value: "" },
            { title: "0,5 - Aide partielle.", value: "" },
            { title: "   0 - Dépendant.", value: "" },
          ]
        }, {
          title: "Habillage",
          responses: [
            { title: "   1 - Autonome pour le choix des vêtements et l'habillage.", value: "" },
            { title: "0,5 - Autonome pour le choix des vêtements, l'habillage mais a besoin d'aide pour se chausser.", value: "" },
            { title: "   0 - Dépendant.", value: "" },
          ]
        }, {
          title: "Toilette",
          responses: [
            { title: "   1 - Autonome pour aller aux toilettes, se déshabiller et se rhabiller ensuite.", value: "" },
            { title: "0,5 - Doit être accompagné ou a besoin d'aide pour se déshabiller et se rhabiller.", value: "" },
            { title: "   0 - Ne peut aller aux toilettes seul.", value: "" },
          ]
        }, {
          title: "Locomotion",
          responses: [
            { title: "   1 - Autonome.", value: "" },
            { title: "0,5 - A besoin d'aide.", value: "" },
            { title: "    0 - Grabataire.", value: "" },
            
          ]
        }, {
          title: "Continence",
          responses: [
            { title: "   1 - Continent.", value: "" },
            { title: "0,5 - Incontinence occasionnelle.", value: "" },
            { title: "   0 - Incontinent.", value: "" },
          ]
        }, {
          title: "Repas",
          responses: [
            { title: "   1 - Mange seul.", value: "" },
            { title: "0,5 - Aide pour couper la viande ou peler les fruits.", value: "" },
            { title: "   0 - Dépendant.", value: "" },
          ]
        },]
      }, {
        id: 2,
        name: "AGGIR : Calcul Gir",
        questions: [{
          title: " 1 - Cohérence",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }, {
          title: "2 - Orientation",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }, {
          title: "3a - Toilette (haut)",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        },
        {
          title: "3b - Toilette (bas)",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        },
        {
          title: "4a - Habillage (haut)",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }, {
          title: "4b - Habillage (milieu)",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },

          ]
        }, {
          title: "4c - Habillage (bas)",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }, {
          title: "5a - Alimentation - Se servir",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },

          ]
        }, {
          title: "6a - Elimination - Urinaire",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },

          ]
        }, {
          title: "6b - Elimination - Anale",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },

          ]
        }, {
          title: "7 - Transferts",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }, {
          title: "8 - Déplacements intérieurs",
          responses: [
            { title: "A - Fait spontanément seul, totalement, régulièrement et correctement.", value: "" },
            { title: "B - Fait partiellement, incorrectement, irrégulièrement ou sur incitation.", value: "" },
            { title: "C - Ne fait pas, ne peut pas ou ne veut pas le faire.", value: "" },
          ]
        }]
      }, {
        name: "AGGIR : Groupes  Gir",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 3,
        name: "Algoplus (Echelle de douleur)",
        questions: [{
          title: "Visage",
          responses: [
            { title: "Froncement des sourcils, grimaces, crispation, mâchoires serrées, visage figé.", value: "" }
          ]
        }, {
          title: "Reagrd",
          responses: [
            { title: "Regard inattentif, fixe, lointain ou suppliant, pleurs, yeux fermés.", value: "" }
          ]
        }, {
          title: "Plaintes",
          responses: [
            { title: "« Aie », « Ouille », « j'ai mal », gémissements, cris.", value: "" }
          ]
        }, {
          title: "Corps",
          responses: [
            { title: "Retrait ou protection d'une zone, refus de mobilisation, attitudes figées.", value: "" }
          ]
        }, {
          title: "Comportement",
          responses: [
            { title: "Agitation ou agressivité, agrippement.", value: "" }
          ]
        }]
      }, {
        id:4,
        name: "Chumlea (Equation)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id: 5,
        name: "CIRS (Score)",
        questions: [{
          title: "Cardiaque",
          responses: [
            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }
          ]
        }, {
          title: "Hypertension artérielle",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Vasculo-hématopoïétique",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Appareil respiratoire",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Ophtalmologique et ORL",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Appareil gastro-intestinal supérieur",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Appareil gastro-intestinal inférieur",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Hépatique",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Rénal",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Appareil génito-urinaire",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Téguments musculo-squelettiques",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Nerveux central et périphérique",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Endocrino-métabolique",
          responses: [

            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }]
        }, {
          title: "Troubles psychiatriques / comportementaux",
          responses: [
            { title: "0 - Aucun problème.", value: "" },
            { title: "1 - Problème léger.", value: "" },
            { title: "2 - Problème modéré.", value: "" },
            { title: "3 - Problème sévère.", value: "" },
            { title: "4 - Problème très grave.", value: "" }
          ]
        }]
      }, {
        id:6,
        name: "Cornell (Echelle de dépression)",
        questions: [{
          title: "1. Anxiété, expression anxieuse, ruminations, soucis",
          responses: [
            { title: "", value: "" }
          ]
        },
        {
          title: "2. Tristesse, expression triste, voix triste, larmoiement",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
                     
          ]
        }, {
          title: "3. Absence de réaction aux événements agréables",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: " 4. Irritabilité, facilement contrarié, humeur changeante",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "5. Agitation, ne peut rester en place, se tortille, s'arrache les cheveux",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "6. Ralentissement, lenteur des mouvements, du débit verbal, des réactions",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "7. Nombreuses plaintes somatiques(côter 0 en présence de symptômes gastro-intestinaux exclusifs)",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "8. Perte d'intérêt, moins impliqué dans les activités habituelles (côter seulement si le changement est survenu brusquement, il y a moins d'un mois)",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "9. Perte d'appétit, mange moins que d'habitude",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "10. Perte de poids, (côter 2 si elle est supérieure à 2,5 kg en 1 mois)",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "11. Manque d'énergie, se fatigue facilement, incapable de soutenir une activité (côter seulement si le changement est survenu brusquement, c'est-à-dire il y a moins d'un mois)",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "12.Variations de l'humeur dans la journée, symptômes plus marqués le matin",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "13. Difficultés d'endormissement, plus tard que d'habitude",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "14. Réveils nocturnes fréquents",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "15. Réveil matinal précoce, plus tôt que d'habitude",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "16. Suicide, pense que la vie ne vaut pas la peine d'être vécue, souhaite mourir",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "17. Auto-dépréciation, s'adresse des reproches à lui-même, peu d'estime de soi, sentiment d'échec",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "18. Pessimisme, anticipation du pire",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        }, {
          title: "19. Idées délirantes congruentes à l'humeur, idées délirantes de pauvreté, de maladie ou de perte",
          responses: [
            { title: "a - Impossible à évaluer", value: "" },
            { title: "0 - Absent", value: "" },
            { title: "1 - Modéré ou intermittent", value: "" },
            { title: "2 - Sévère", value: "" },
          ]
        },]
      }, {
        id:7,
        name: "Doloplus (Echelle de douleur)",
        questions: [{
          title: "Plaintes somatiques",
          responses: [
            { title: "0 - Pas de plainte", value: "" },
            { title: "1 - Protection à la sollicitation n'empêchant pas la poursuite de l'examen ou des soins", value: "" },
            { title: "2 - Plaintes spontanées occasionnelles", value: "" },
            { title: "3 - Plaintes spontanées continues", value: "" },
          ]
        }, {
          title: "Positions antalgiques au repos",
          responses: [
            { title: "0 - Pas de position antalgique", value: "" },
            { title: "1 - Le sujet évite certaines positions de façon occasionnelle", value: "" },
            { title: "2 - Position antalgique permanente et efficace", value: "" },
            { title: "3 - Position antalgique permanente inefficace", value: "" },

          ]
        }, {
          title: "Protection de zones douloureuses",
          responses: [
            { title: "0 - Pas de protection", value: "" },
            { title: "1 - Protection à la sollicitation n'empêchant pas la poursuite de l'examen ou des soins", value: "" },
            { title: "2 - Protection à la sollicitation empêchant tout examen ou soins", value: "" },
            { title: "3 - Protection au repos, en l'absence de toute sollicitation", value: "" },
          ]
        }, {
          title: "Mimique",
          responses: [
            { title: "0 - Mimique habituelle", value: "" },
            { title: "1 - Mimique semblant exprimer la douleur à la sollicitation", value: "" },
            { title: "2 - Mimique semblant exprimer la douleur en l'absence de toute sollicitation", value: "" },
            { title: "3 - Mimique inexpressive en permanence et de manière inhabituelle (atone, figée, regard vide)", value: "" },
          ]
        }, {
          title: "Sommeil",
          responses: [
            { title: "0 - Sommeil habituel", value: "" },
            { title: "1 - Difficultés d'endormissement", value: "" },
            { title: "2 - Réveils fréquents (agitation motrice)", value: "" },
            { title: "3 - Insomnie avec retentissement sur les phases d'éveil", value: "" },
          ]
        }, {
          title: "Toilette et/ou habillage",
          responses: [
            { title: "0 - Possibilités habituelles inchangées", value: "" },
            { title: "1 - Possibilités habituelles peu diminuées (précautionneux mais complet)", value: "" },
            { title: "2 - Possibilités habituelles très diminuées, toilette et/ou habillage étant difficiles et partiels", value: "" },
            { title: "3 - Toilette et/ou habillage impossibles, le malade exprimant son opposition à toute tentative", value: "" },
          ]
        }, {
          title: "Mouvements",
          responses: [
            { title: "0 - Possibilités habituelles inchangées", value: "" },
            { title: "1 - Possibilités habituelles actives limitées (le malade évite certains mouvements, diminue son périmètre de marche)", value: "" },
            { title: "2 - Possibilités habituelles actives et passives limitées (même aidé, le malade diminue ses mouvements)", value: "" },
            { title: "3 - Mouvement impossible, toute mobilisation entraînant une opposition", value: "" },
          ]
        }, {
          title: "Communication",
          responses: [
            { title: "0 - Inchangée", value: "" },
            { title: "1 - Intensifiée (la personne attire l'attention de manière inhabituelle)", value: "" },
            { title: "2 - Diminuée (la personne s'isole)", value: "" },
            { title: "3 - Absence ou refus de toute communication", value: "" },
          ]
        }, {
          title: "Vie sociale",
          responses: [
            { title: "0 - Participation habituelle aux différentes activités (repas, animations, ateliers thérapeutiques,…)", value: "" },
            { title: "1 - Participation aux différentes activités uniquement à la sollicitation", value: "" },
            { title: "2 - Refus partiel de participation aux différentes activités", value: "" },
            { title: "3 - Refus de toute vie sociale", value: "" },
          ]
        }, {
          title: "Troubles du comportement",
          responses: [
            { title: "0 - Comportement habituel", value: "" },
            { title: "1 - Troubles du comportement à la sollicitation et itératif", value: "" },
            { title: "2 - Troubles du comportement à la sollicitation et permanent", value: "" },
            { title: "3 - Troubles du comportement permanent (en dehors de toute sollicitation)", value: "" },
          ]
        },]
      }, {
        id:8,
        name: "ECPA douleur, non communicant (Echelle)",
        questions: [{
          title: "1) Expression du visage : regard et mimique",
          responses: [
            { title: "0 - Visage détendu.", value: "" },
            { title: "1 - Visage soucieux.", value: "" },
            { title: "2 - Le sujet grimace de temps en temps.", value: "" },
            { title: "3 - Regard effrayé et/ou visage crispé.", value: "" },
            { title: "4 - Expression complètement figée.", value: "" }
          ]
        }, {
          title: "2) Position spontanée au repos",
          responses: [

            { title: "0 - Aucune position antalgique.", value: "" },
            { title: "1 - Le sujet évite une position.", value: "" },
            { title: "2 - Le sujet choisit une position antalgique.", value: "" },
            { title: "3 - Le sujet recherche sans succès une position antalgique.", value: "" },
            { title: "4 - Le sujet reste immobile comme cloué par la douleur.", value: "" }]
        }, {
          title: "3) Mouvements (ou mobilité) du patient",
          responses: [

            { title: "0 - Le sujet bouge ou ne bouge pas comme d'habitude*.", value: "" },
            { title: "1 - Le sujet bouge comme d'habitude* mais évite certains mouvements.", value: "" },
            { title: "2 - Lenteur, rareté des mouvements contrairement à son habitude*.", value: "" },
            { title: "3 - Immobilité contrairement à son habitude*.", value: "" },
            { title: "4 - Absence de mouvement** ou forte agitation contrairement à son habitude*.", value: "" }]
        }, {
          title: "4) Relation à autrui",
          responses: [

            { title: "0 - Même type de contact que d'habitude*.", value: "" },
            { title: "1 - Contact plus difficile à établir que d'habitude*.", value: "" },
            { title: "2 - Évite la relation contrairement à l'habitude*.", value: "" },
            { title: "3 - Absence de tout contact contrairement à l'habitude*.", value: "" },
            { title: "4 - Indifférence totale contrairement à l'habitude*.", value: "" }]
        }, {
          title: "5) Anticipation anxieuse aux soins",
          responses: [

            { title: "0 - Le sujet ne montre pas d'anxiété.", value: "" },
            { title: "1 - Angoisse du regard, impression de peur.", value: "" },
            { title: "2 - Sujet agité.", value: "" },
            { title: "3 - Sujet agressif.", value: "" },
            { title: "4 - Cris, soupirs, gémissements.", value: "" }]
        }, {
          title: "6) Réactions pendant la mobilisation",
          responses: [

            { title: "0 - Le sujet se laisse mobiliser ou se mobilise sans y accorder une attention particulière.", value: "" },
            { title: "1 - Le sujet a un regard attentif et semble craindre la mobilisation et les soins.", value: "" },
            { title: "2 - Le sujet retient de la main ou guide les gestes lors de la mobilisation ou des soins.", value: "" },
            { title: "3 - Le sujet adopte une position antalgique lors de la mobilisation ou des soins.", value: "" },
            { title: "4 - Le sujet s'oppose à la mobilisation ou aux soins.", value: "" }]
        }, {
          title: "7) Réactions pendant les soins des zones douloureuses",
          responses: [

            { title: "0 - Aucune réaction pendant les soins.", value: "" },
            { title: "1 - Réaction pendant les soins, sans plus.", value: "" },
            { title: "2 - Réaction au toucher des zones douloureuses.", value: "" },
            { title: "3 - Réaction à l'éffleurement des zones douloureuses.", value: "" },
            { title: "4 - L'approche des zones est impossible.", value: "" }]
        }, {
          title: "8) Plaintes exprimées pendant le soin",
          responses: [

            { title: "0 - Le sujet ne se plaint pas.", value: "" },
            { title: "1 - Le sujet se plaint si le soignant s'adresse à lui.", value: "" },
            { title: "2 - Le sujet se plaint dès la présence du soignant.", value: "" },
            { title: "3 - Le sujet gémit ou pleure silencieusement de façon spontanée.", value: "" },
            { title: "4 - Le sujet crie ou se plaint violemment de façon spontanée.", value: "" }]
        },]
      }, {
        id: 9,
        name: "Geriatric Depression Scale (15 items)",
        questions: [{
          title: "1 - Etes-vous satisfait(e) de votre vie ?",
          responses: [
            { title: "", value: "" }
          ]
        },
        {
          title: "2 - Avez-vous renoncé à un grand nombre de vos activités?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "3 - Avez-vous le sentiment que votre vie est vide ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "4 - Vous ennuyez-vous souvent ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "7 - Etes-vous de bonne humeur la plupart du temps ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "8 - Craignez-vous un mauvais présage pour l'avenir ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "9 - Etes-vous heureux la plupart du temps ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "10 - Avez-vous souvent besoin d'aide ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "12 - Préférez-vous rester seul(e) dans votre chambre plutôt que de sortir ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "14 - Pensez-vous que votre mémoire est plus mauvaise que celle de la plupart des gens ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "15 - Pensez-vous qu'il est merveilleux de vivre à notre époque ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "17 - Avez-vous le sentiment d'être désormais inutile ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "21 - Avez-vous beaucoup d'énergie ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "22 - Désespérez-vous de votre situation présente ?",
          responses: [
            { title: "", value: "" }
          ]
        }, {
          title: "23 - Pensez-vous que la situation des autres est meilleure que la vôtre et que les autres ont plus de chance que vous ?",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:10,
        name: "IADL de Lawton & Brody (Echelle)",
        questions: [{
          title: "Aptitude à utiliser le téléphone",
          responses: [
            { title: "1 - Se sert du téléphone de sa propre initiative, cherche les numéros, les compose.", value: "" },
            { title: "1 - Compose quelques numéros bien connus.", value: "" },
            { title: "1 - Répond au téléphone, mais ne compose pas.", value: "" },
            { title: "0 - N'utilise pas du tout le téléphone.", value: "" },
          ]
        },{
          title: "Faire les courses",
          responses: [
            { title: "1 - Fait toutes les courses tout seul.", value: "" },
            { title: "0 - Fait les courses lui-même pour les petits achats.", value: "" },
            { title: "0 - A besoin d'accompagnement pour toutes les courses.", value: "" },
            { title: "0 - Totalement incapable de faire les courses.", value: "" },
          ]
        },{
          title: "Préparation des aliments",
          responses: [
            { title: "1 - Planifie, prépare et sert des repas équilibrés de manière indépendante.", value: "" },
            { title: "0 - Prépare des repas équilibrés s'il dispose des ingrédients.", value: "" },
            { title: "0 - Réchauffe des repas préparés et les sert ou prépare des repas mais n'assure pas une alimentation suffisamment équilibrée.", value: "" },
            { title: "0 - Les repas doivent lui être préparés et servis.", value: "" },
          ]
        },{
          title: "Ménage",
          responses: [
            { title: "1 - S'occupe seul du ménage ou le fait avec une aide occasionnelle (travaux ménagers lourds).", value: "" },
            { title: "1 - Exécute des tâches quotidiennes légères comme faire la vaisselle, refaire les lits.", value: "" },
            { title: "1 - Exécute des tâches journalières, mais n'arrive pas à maintenir un niveau acceptable de propreté.", value: "" },
          
            { title: "1 - A besoin d'aide pour toutes les tâches ménagères.", value: "" },
                        { title: "0 - Ne participe absolument pas aux tâches ménagères.", value: "" },
          ]
        },{
          title: "Lessive",
          responses: [

            { title: "1 - Fait la lessive lui-même.", value: "" },
            { title: "1 - Lave le petit linge, les chaussettes, les bas, etc.", value: "" },
            { title: "0 - La lessive doit être réalisée par une tierce personne.", value: "" },
                ]        },{
          title: "Transport",
          responses: [

            { title: "1 - Voyage seul en utilisant les transports en commun ou utilise sa propre voiture.", value: "" },
            { title: "1 - Organise lui-même ses déplacements avec un taxi, mais n'utilise pas les transports en commun.", value: "" },
            { title: "1 - Utilise les transports en commun, s'il est aidé ou accompagné.", value: "" },
            
            { title: " 0 - les déplacements reposent sur le recours au taxi ou à la voiture avec l'aide d'une tierce personne.", value: "" },
            { title: "0 - Ne se déplace absolument pas.", value: "" },

          ]

        }
          , {
          title: "Gestion thérapeutique",
          responses: [

            { title: "1 - Assure la préparation et la prise des médicaments à la dose correcte et aux heures appropriées.", value: "" },
            { title: "0 - Gère la prise des médicaments si ceux-ci ont été préalablement préparés.", value: "" },
            { title: "", value: "" },
            { title: "0 - Est incapable de préparer et prendre seul ses médicaments.", value: "" },          ]
        },{
          title: "Capacité à gérer ses finances",
          responses: [

            { title: "1 - Règle lui-même de manière autonome ses affaires financières (budget, établissement de chèques, paiement du loyer et des factures, aller à la banque), contrôle ses revenus.", value: "" },
            { title: "1 - Assure les achats quotidiens, mais a besoin d'aide pour les opérations bancaires, les achats importants, etc.", value: "" },
            { title: "0 - Incapable de gérer les affaires financières.", value: "" },
               
]
        },]
      }, {
        name: "Mini Mental Test (MMS)",
        questions: [{
          title: "Quelle est la date complète d'aujourd'hui ? (si complet, cochez toutes les cases, sinon décomposez les questions)",
          responses: [

            { title: "En quelle année sommes-nous ?", value: "" },
            { title: "En quelle saison ?", value: "" },
            { title: "En quel mois ?", value: "" },
            { title: "Quel jour du mois ?", value: "" },
           { title: "Quel jour de la semaine ?", value: "" },          ]

                    
        },{
          title: "Je vais vous poser maintenant quelques questions sur l'endroit où nous trouvons.",
          responses: [
            { title: "Quel est le nom de l'hôpital où nous sommes ?", value: "" },
            { title: "Dans quelle ville se trouve-t-il ?", value: "" },
            { title: "Quel est le nom du département dans lequel est située cette ville ?", value: "" },
            { title: "Dans quelle province ou région est située ce département ?", value: "" },
            { title: "A quel étage sommes-nous ?", value: "" },
          ]
        },{
          title: "Je vais vous dire trois mots ; je vous voudrais que vous me les répétiez et que vous essayiez de les retenir car je vous les redemanderai tout à l'heure. (trois versions de mots sont proposées, choisissez un seul des mots par ligne)",
          responses: [
            { title: "Cigare ; Citron ; Fauteuil", value: "" },
            { title: "Fleur ; Clé ; Tulipe", value: "" },
            { title: "Porte ; Ballon ; Canard", value: "" }

          ]
        },{
          title: "Voulez-vous compter à partir de 100 en retirant 7 à chaque fois ?",
          responses: [
            { title: "93", value: "" },
            { title: "86", value: "" },
            { title: "79", value: "" },
            { title: "72", value: "" },
            { title: "65", value: "" },
          ]
        },{
          title: "Pouvez-vous me dire quels étaient les 3 mots que je vous ai demandés de répéter et de retenir tout à l'heure ?",
          responses: [
            { title: "Cigare ; Citron ; Fauteuil", value: "" },
            { title: "Fleur ; Clé ; Tulipe", value: "" },
            { title: "Porte ; Ballon ; Canard", value: "" },
            { title: "Quel est le nom de cet objet ? (montrer un crayon)", value: "" },
            { title: "Quel est le nom de cet objet ? (montrer une montre)", value: "" },
            { title: "Ecoutez bien et répétez après moi : « Pas de mais, ni de si, ni de et »", value: "" }


          ]
        },{
          title: "Poser une feuille de papier sur le bureau, la montrer au sujet en lui disant : « Ecoutez bien et faites ce que je vais vous dire : »",
          responses: [
            { title: "Prenez cette feuille de papier avec votre main droite,", value: "" },
            { title: "Pliez-la en deux,", value: "" },
            { title: "Et jetez-la par terre.", value: "" }

          ]
        },{
          title: "Tendre au sujet une feuille de papier sur laquelle est écrit en gros caractère : « FERMEZ LES YEUX » et dire au sujet :",
          responses: [
            { title: "« Faites ce qui est écrit » (cocher si le sujet ferme les yeux).", value: "" }
          ]
        },{
          title: "Tendre au sujet une feuille de papier et un stylo, en disant :",
          responses: [
            { title: "« Voulez-vous m'écrire une phrase, ce que vous voulez, mais une phrase entière. » (cocher si réussi)", value: "" }
          ]
        }]
      }, {
        name: "Nutritional Risk Index",
        questions: [{
          title: "",
          responses: [

            { title: "", value: "" }        ]
        }]
      },
    ]
  },// Gynécologie, Obstétrique
  {
    id: 8,
    name: "Gynécologie, Obstétrique",
    image: "/assets/img/gynecologue.svg",
    diseasesLink: "/specialities/gynecologue",
    diseases: [
      {
        id:1,
        name: "Age gestationnel selon hauteur utérine",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" },
            { title: "", value: "" },
            { title: "", value: "" },
            { title: "", value: "" },

          ]
        }]
      }, {
        id:2,
        name: "Baumgarten & Grüber, Tocolyse (Index)",
        questions: [{
          title: "Contraction utérines",
          responses: [

            { title: "0 - Absentes.", value: "" },
            { title: "1 - Irrégulières.", value: "" },
            { title: "2 - Régulières.", value: "" },

             ]
        }
          ,
        {
          title: "Membranes",
          responses: [

            { title: "0 - Intactes", value: "" },
            { title: "2 - Rupture haute.", value: "" },
            { title: "4 - Rupture basse.", value: "" },

               ]
        },{
          title: "M2trorragies",
          responses: [

            { title: "0 - Absentes.", value: "" },
            { title: "1 - Peu importantes.", value: "" },
            { title: "2 - Hémorragies.", value: "" },

               ]
        },{
          title: "Dilatation du col",
          responses: [

            { title: "0 - 0 cm.", value: "" },
            { title: "1 - 1 cm.", value: "" },
            { title: "2 - 2 cm.", value: "" },

            { title: "3 - 3cm.", value: "" },
            { title: "4 - ≥ 4 cm.", value: "" },
          ]
        },]
      }, {
        id:3,
        name: "Bishop (Score)",
        questions: [{
          title: "Dilatation du col utérin",
          responses: [
            { title: "Fermé.", value: "" },
            { title: "1-2 cm.", value: "" },
            { title: "3-4 cm.", value: "" },
               { title: "5 cm ou plus.", value: "" },
          ]
        },{
          title: "Effacement du col utérin",
          responses: [
            { title: "Long (0-30%).", value: "" },
            { title: "½ long (40-50%).", value: "" },
            { title: "Court (60-70%).", value: "" },
               { title: "Effacé (> 80%).", value: "" },
          ]
        },{
          title: "Consistance du col utérin",
          responses: [
            { title: "Ferme", value: "" },
            { title: "Moyenne", value: "" },
           { title: "Molle", value: "" },

          ]
        },{
          title: "Position du col utérin",
          responses: [
            { title: "Postérieure.", value: "" },
            { title: "Centrée", value: "" },
            { title: "Antérieure.", value: "" },

          ]
        },{
          title: "Hauteur de la tête",
          responses: [
            { title: "Haute et mobile (3 cm au-dessus).", value: "" },
            { title: "Amorcée (2 cm au-dessus).", value: "" },
            { title: "Fixée (< 1 cm au-dessus).", value: "" },
            { title: " Fixée (< 1 cm au-dessus).", value: "" }
          ]
        }]
      }, {
        id:4,
        name: "Calendrier de grossesse",
        questions: [{
          title: "Age gestationnel (jours d'aménorrhée)",
          responses: [
            { title: "", value: "" },
          ]
        }]
      }, {
        id:5,
        name: "Datation grossesse via LCC",
        questions: [{
          title: "Taux d'hCG (mUI/ml)",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:6,
        name: "Fernandez (Score)",
        questions: [{
          title: "Age gestationnel (jours d'aménorrhée)",
          responses: [
            { title: "1 - Plus de 49 jours.", value: "" },
            { title: "2 - De 42 à 49 jours.", value: "" },
            { title: "3 - Moins de 42 jours.", value: "" }

          ]
        },
        {
          title: "Taux d'hCG (mUI/ml)",
          responses: [
            { title: "1 - Taux < 1000.", value: "" },
            { title: "2 - Taux ≥ 1000 et ≤ 5000.", value: "" },
            { title: "3 - Taux < 5000.", value: "" },
          ]
        },
        {
          title: "Taux de progestérone (ng/ml)",
          responses: [
            { title: "1 - Taux < 5.", value: "" },
            { title: "2 - Taux ≥ 5 et ≤ 10.", value: "" },
              { title: "3 - Taux < 10.", value: "" },
          ]
          },
        {
          title: "Douleurs abdominales",
          responses: [
            { title: "1 - Absentes.", value: "" },
            { title: "2 - Provoquées.", value: "" },
            { title: "3 - Spontanées.", value: "" },
          ]
          },
        {
          title: "Hématosalpinx (cm)",
          responses: [
            { title: "1 - Diamètre < 1 cm.", value: "" },
            { title: "2 - Diamètre ≥ 1 cm et ≤ 3 cm.", value: "" },
              { title: "3 - Diamètre > 3cm.", value: "" },
          ]
          },
        {
          title: "Hémopéritoine (ml)",
          responses: [
            { title: "1 - Absence d'hémopéritoine.", value: "" },
            { title: "2 - Hémopéritoine de 100 ml ou moins.", value: "" },
              { title: "3 - Hémopéritoine de plus de 100 ml.", value: "" },
          ]
        }]
      }, {
        id:7,
        name: "FIGO, fibromes utérins (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:8,
        name: "Higham (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:9,
        name: "Malinas (Score)",
        questions: [{
          title: "Parité",
          responses: [
            { title: "0 - Primipare.", value: "" },
            { title: "1 - Deuxième pare.", value: "" },
            { title: "2 - Troisième pare ou plus.", value: "" },
          ]
        },
        {
          title: "Durée du travail",
          responses: [
            { title: "0 - Moins de 3h.", value: "" },
             { title: "1 - De 3 à 5h.", value: "" },

             { title: "2 - Plus de 5h.", value: "" },

            
          ]
        },{
          title: "Durée des contractions",
          responses: [
            { title: "0 - Moins de 1 minute.", value: "" },
            { title: "1 - Environ 1 minute.", value: "" },
             { title: "2 - Plus de 1 minute.", value: "" }


          ]
        },{
          title: "Intervalle entre deux contractions",
          responses: [
            { title: "0 - Supérieur à 5 minutes.", value: "" },
            { title: "1 - De 3 à 5 minutes.", value: "" },
            { title: "2 - Moins de 3 minutes.", value: "" },
          ]
        },{
          title: "Perte des eaux",
          responses: [
            { title: "0 - Non encore effectuée.", value: "" },
            { title: "1 - Il y a moins d'une heure.", value: "" },
             { title: "2 - Il y a plus d'une heure.", value: "" }


          ]
        },{
          title: "Dilatation du col (Malinas B)",
          responses: [
            { title: "0 - Environ 5 cm.", value: "" },
            { title: "1 - Environ 7 cm.", value: "" },
            { title: "2 - Environ 9 cm.", value: "" },
            
          ]
        }]
      }, {
        id:10,
        name: "Manning (Score)",
        questions: [{
          title: "Mouvements respiratoires",
          responses: [
            { title: "Absents ou aucun épisode de plus de 30s.", value: "" },
            { title: "Plus de 1 épisode de plus de 30s.", value: "" }

          ]
        },
        {
          title: "Mouvements fœtaux globaux",
          responses: [
            { title: "Moins de 3 mouvements.", value: "" },
             { title: "3 mouvements vifs des membres ou plus.", value: "" },
          ]
        },{
          title: "Tonus et réflèxe fœtal",
          responses: [
            { title: "Absence de mouvement ou mouvements lents.", value: "" },
            { title: "Plus de 1 mouvement vif d'extension-flexion du tronc ou d'un membre ou d'une main.", value: "" }

          ]
        },{
          title: "Liquide amniotique",
          responses: [
            { title: "Oligo-amnios (pas de citerne de plus de 1 cm).", value: "" },
                        
            { title: "Normal .", value: "" }

          ]
        },{
          title: "Réactivité du rythme cardiaque fœtal",
          responses: [
            { title: "Moins de 2 accélérations.", value: "" },
            { title: "2 accélérations ou plus.", value: "" }

          ]
        }]
      },
      {
        id:11,
        name: "Premat-SPIA, T. < 33SA (Score)",
        questions: [{
          title: "Appel pour accouchement",
          responses: [
            { title: "0 - Grossesse normale.", value: "" },
            { title: "2 - Accouchement imminent ou panique de l'appelant.", value: "" }, 
          ]
        },
        {
          title: "Contact avec la parturiente",
          responses: [
            { title: "Possible", value: "" },
             { title: "Impossible", value: "" },
          ]
          },
        {
          title: "Douleurs abdominales",
          responses: [
            { title: "0 - Depuis moins de 3 heures.", value: "" },
             { title: "2 - Depuis plus de 3 heures ou non évalué.", value: "" },
          ]
          },
        {
          title: "Rupture de la proche des eaux",
          responses: [
            { title: "0 - Non", value: "" },
            { title: "3 - Oui ou non évalué", value: "" }
          ]
        }]
      }, {
        id:12,
        name: "SPIA, T. ≥ 33SA (Score)",
        questions: [{
          title: "Appel pour accouchement",
          responses: [
            { title: "0 - Normal ou autre pathologie.", value: "" },
             { title: "3 - Accouchement imminent ou panique de l'appelant.", value: "" },
          ]
        },
        {
          title: "Contact avec la parturiente",
          responses: [
            { title: "0 - Possible.", value: "" },
             { title: "3 - Impossible.", value: "" },
          ]
          },
        {
          title: "Envie de pousser",
          responses: [
            { title: "0 - Pas d'envie de pousser.", value: "" },
            { title: "2 - Question non évaluée.", value: "" },
            { title: "5 - Depuis plus de 30mn, ou temps non évalué.", value: "" },
               { title: "6 - Depuis moins de 30mn.", value: "" },
          ]
          },
        {
          title: "Rythme des contractions",
          responses: [
            { title: "0 - Evasif (5-10') ou aucune.", value: "" },
            { title: "4 - Non évalué.", value: "" },
            { title: "5 - Fréquentes (4-6 mn).", value: "" },
               { title: "8 - Permanentes.", value: "" },
          ]
          },
        {
          title: "Facteurs aggravants",
          responses: [
            { title: "+2 - Accouchement rapide (≤1h) ou à domicile.", value: "" },
            { title: "+3 - Age compris entre 26 et 36 ans.", value: "" },
              { title: "+3 - Age compris entre 26 et 36 ans.", value: "" },
          ],
          },
        {
          title: "Facteurs favorisants",
          responses: [
            { title: "-7 - Premier accouchement.", value: "" },
             { title: "-3 - Traitement tocolytique pendant la grossesse.", value: "" },
          ]
        }]
      },
    ]
  },// Hématologie
  {
    id:9,
    name: "Hématologie",
    image: "/assets/img/Hematologie.svg",
    diseasesLink: "/specialities/hematologie",
    diseases: [
      {
        id:1,
        name: "4T, thrombopénie (Score)",
        questions: [{
          title: "Thrombopénie",
          responses: [
            { title: "2 - Diminution de plus de 50% de la numération plaquettaire OU plaquettes entre 20.000 et 100.000 / mm3.", value: "" },
            { title: "1 - Diminution de 30 à 50% de la numération plaquettaire OU plaquettes entre 10.000 et 20.000 / mm3.", value: "" }, 
             { title: "0 - Diminution de moins de 30% de la numération plaquettaire OU plaquettes < 10.000 / mm3.", value: "" },
          ]
        },
        {
          title: "Délai de survenue",
          responses: [
            { title: "2 - Chute de la numération plaquettaire (ou thrombose) 5 à 10 jours après le début de l'héparine OU dans un délai de 24 heures si héparinothérapie récente (moins de 30 jours).", value: "" },
            { title: "1 - Chute de la numération plaquettaire (ou thrombose) après plus de 10 jours d'héparinothérapie OU dans un délai de 24 heures si héparinothérapie semi récente (de 30 à 100 jours).", value: "" },
              { title: "0 - Aucun de ces cas précédents.", value: "" },
          ]
          },
        {
          title: "Clinique (thromboses)",
          responses: [
            { title: "2 - Nouvelle thrombose ou nécrose cutanée ou réaction systémique après injection d'héparine.", value: "" },
            { title: "1 - Extension d'une thrombose préexistante ou suspicion de thrombose non confirmée ou érythème cutanée après injection d'héparine.", value: "" },
              { title: "0 - Aucun événement thrombotique.", value: "" },
          ]
          },
        {
          title: "Autre diagnostic de thrombopénie",
          responses: [
            { title: "2 - Aucune autre cause possible de thrombopénie.", value: "" },
            { title: "1 - Autre cause possible.", value: "" }, 
              { title: "0 - Autre cause certaine de thrombopénie.", value: "" },
          ]
        }]
      }, {
        id:2,
        name: "Ann Arbor (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:3,
        name: "Binet (Classification)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:4,
        name: "Corrected Count Increment (RTP & CCI)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:5,
        name: "Déficit en fer",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:6,
        name: "HLH-2004 (Critères)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
        }]
      }, {
        id:7,
        name: "HScore (Score)",
        questions: [{
          title: "Signes Cliniques",
          responses: [
            { title: "Immunosuppression connue.", value: "" },
            { title: "Fièvre, température max. ≥ 38,4°C et ≤ 39,4°C.", value: "" },
            { title: "Fièvre, température max. > 39,4°C.", value: "" },
            { title: "Hépatomégalie OU Splénomégalie.", value: "" },
            { title: "Hépatomégalie ET Splénomégalie.", value: "" },
          ]
        },
        {
          title: "Signes Biologiques",
          responses: [
            { title: "Hémoglobine ≤ 9,2 g/dl.", value: "" },
            { title: "Leucocytes ≤ 5000/mm³", value: "" },
            { title: "Plaquettes ≤ 110.000/mm³", value: "" },
            { title: "Ferritinémie ≥ 2000 µg/L et ≤ 6000 µg/L.", value: "" },
            { title: "Ferritinémie > 6000 µg/L.", value: "" },
            { title: "Triglycérides ≥ 1,5 mmol/l et ≤ 4 mmol/l.", value: "" },
            { title: "Triglycérides > 4 mmol/l.", value: "" },
            { title: "ASAT ≥ 30 UI/L.", value: "" },
            { title: "Fibrinogène ≤ 2,5 g/l.", value: "" },
            { title: "Hémophagocytose médullaire.", value: "" },
                     
          ]
        }]
      }, {
        id:8,
        name: "Padoue (Score)",
        questions: [{
          title: "",
          responses: [
            { title: "Cancer actif, ou en rémission depuis moins de 6 mois.", value: "" },
            { title: "Antécédent de maladie thrombo-embolique veineuse.", value: "" },
            { title: "Mobilité réduite.", value: "" },
            { title: "Anomalie de la coagulation.", value: "" },
            { title: "Chirurgie ou traumatisme il y a moins d'un mois.", value: "" },
            { title: "Age ≥ 70 ans.", value: "" },
            { title: "Insuffisance cardiaque ou respiratoire.", value: "" },
            { title: "Infarctus du myocarde ou AVC ischémique aigu.", value: "" },
            { title: "Infection aigüe, ou affection rhumatologique aigüe.", value: "" },
            { title: "Obésité (BMI ≥ 30).", value: "" },
            { title: "Prise d'un traitement hormonal.", value: "" },
                      
          ]
        }]
      }, {
        id:9,
        name: "Pertes sanguines acceptables",
        questions: [{
          title: "Hématocrites ou Hémoglobines :",
          responses: [
            { title: " Prématuré", value: "" },
            { title: "Nouveau Né", value: "" },
            { title: "Nourrisson", value: "" },
            { title: "Enfant", value: "" },
            { title: "Adulte", value: "" },

          ]
        }]
      }, {
        id:10,
        name: "PRESEV (Score)",
        questions: [{
          title: "Réticulocytes",
          responses: [
            { title: "0 - Réticulocytes ≤ 216.000/mm³.", value: "" },
            { title: "6 - Réticulocytes > 216.000/mm³.", value: "" },
          ]
        },
        {
          title: "Douleur rachis et/ou pelvis",
          responses: [
            { title: "0 - CPS* 0: Pas de douleur.", value: "" },
            { title: "0 - CPS* 1: Douleur modérée, non modifiée par la mobilisation.", value: "" },
            { title: "4 - CPS* 2: Douleur modérée, augmentée à la mobilisation.", value: "" },
            { title: "6 - CPS* 3: Douleur sévère handicapante.", value: "" },
          ]
          },{
          title: "Leucocytes",
          responses: [
            { title: "0 - Leucocytes ≤ 11.000/mm³.", value: "" },
                { title: "0 - Leucocytes > 11.000/mm³.", value: "" },
          ]
        },{
          title: "Hémoglobine",
          responses: [
            { title: "0 - Hémoglobine > 9 g/dL.", value: "" },
              { title: "1 - Hémoglobine ≤ 9 g/dL.", value: "" },
          ]
        }
        ]
      }, {
        id:11,
        name: "PTI, Hémorragique Khellaf (Score)",
        questions: [{
          title: "Age",
          responses: [
            { title: "  0 - Age ≤ 65 ans.", value: "" },
            { title: "  2 - Age > 65 ans et ≤ 75 ans.", value: "" },
              { title: "  5 - Age > 75 ans", value: "" },
          ]
        },{
          title: "Saignement cutané",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "   1 - Purpura pétéchial localisé (membres).", value: "" },
            { title: "    2 - Purpura ecchymotique localisé.", value: "" },
            { title: "   2 - Purpura pétéchial 2 localisations (ex.: thorax+jambes).", value: "" },
            { title: "    3 - Purpura pétéchial généralisé.", value: "" },
            { title: "    4 - Purpura ecchymotique généralisé.", value: "" },
          ]
        },{
          title: "Saignement nasal",
          responses: [
            { title: "  0 - Aucun", value: "" },
             { title: "  2 - Épistaxis unilatérale.", value: "" },
              { title: "  3 - Épistaxis bilatérale.", value: "" },
          ]
        },{
          title: "Saignement buccal",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "  5 - Bulles hémorragiques endobuccales spontanées et/ou gingivorragies spontanées.", value: "" },
          ]
        },{
          title: "Saignement gastro-intestinal",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "  4 - Saignement digestif sans anémie.", value: "" },
            { title: "15 - Saignement digestif avec anémie (perte de plus de 2 g d'hémoglobine) et/ou choc.", value: "" },
          ]
        },{
          title: "Saignement urinaire",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "  4 - Hématurie macroscopique sans anémie.", value: "" },
            { title: "10 - Hématurie macroscopique avec anémie aiguë.", value: "" }

          ]
        },{
          title: "Saignement génital",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "  4 - Méno/Métrorrhagie majeure sans anémie.", value: "" },
            { title: "10 - Méno/Métrorrhagie majeure avec anémie aiguë.", value: "" },
          ]
          },
          {
          title: "Saignement S.N.C.",
          responses: [
            { title: "  0 - Aucun", value: "" },
            { title: "15 - Saignement du Système Nerveux Central ou saignement avec mise en jeu du pronostic vital.", value: "" },
          ]
        },
        ]
      }, {
        id:12,
        name: "Rendement Tranfusionnel Plaquettaire (RTP & CCI)",
        questions: [{
          title: "",
          responses: [
            { title: "", value: "" }
          ]
          // Prématuré
 //Nouveau Né
 //Nourrisson
 ///Enfant
 //Adulte
        }]
      }, {
        id: 13,
        name: "Volume à transfuser, CGR",
        questions: [{
          title: "Patient à Transfuser",
          responses: [
            { title: "Prématuré", value: "" },
            { title: " Nouveau Né", value: "" },
            { title: "Nourrission", value: "" },
            { title: "Enfant", value: "" },
            { title: "Adulte", value: "" },



          ]
        }]
      },
    ]
  },// Hépato-Gatstroentérologie
  {
    id:10,
    name: "Hépato-Gatstroentérologie",
    image: "/assets/img/hep.svg",
    diseasesLink: "/specialities/hepato",
    diseases: [{
      id:1,
      name: "APRI (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
    }, {
      id:2,
      name: "Balthazar (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:3,
      name: "Balthazar Modifié (Score)",
      questions: [{
        title: "Score scannographie(TDM non injecté",
        responses: [
          { title: "A - Pancréas normal.", value: "" },
          { title: "B - Elargissement focal ou diffus du pancréas.", value: "" },
          { title: "C - Pancréas hétérogène associé à une densification de la graisse péripancréatique.", value: "" },
          { title: "D - Présence d’une collection péripancréatique (coulée) unique.", value: "" },
         { title: "E - Présence d'au moins deux collections péripancréatiques (coulées) ou présence de gaz à l’intérieur d’une collection non drainée.", value: "" },
        ]
      },
      {
        title: "Score de nécrose(TDM injecté)",
        responses: [
          { title: "0 - Pas de nécrose.", value: "" },
          { title: "2 - Nécrose de 30% ou moins du pancréas.", value: "" },
          { title: "4 - Nécrose entre 30% et 50% du pancréas.", value: "" },
          { title: "6 - Nécrose de plus de 50% du pancréas.", value: "" },
        ]
      }]
      }, {
      id:4,
      name: "Bedside Index for Severe Acute Pancreatitis (BISAP)",
      questions: [{
        title: "Urée sérique",
        responses: [
          { title: "Urée sérique > 8,9 mmol/l (25 mg/dl).", value: "" }
        ]
      },
      {
        title: " Altération fonctions supérieures",
        responses: [
          { title: "Score de Glasgow < 15.", value: "" }
        ]
        },
      {
        title: " Syndrome de réponse inflammatoire systémique",
        responses: [
          { title: "Présence de 2 critères ou plus d'infection selon SRIS.", value: "" }
        ]
        },
      {
        title: " Age",
        responses: [
          { title: "Age > 60 ans.", value: "" }
        ]
        },
      {
        title: " Epanchement pleural",
        responses: [
          { title: "Présence d'un épanchement pleural sur l'imagerie complémentaire.", value: "" }
        ]
      }]
      }, {
      id: 5,
      name: "Blamey (Score)",
      questions: [{
        title: "Facteurs évoquant une origine biliaire de la pancréatite:",
        responses: [
          { title: "Âge ≥ 50 ans.", value: "" },
          { title: "Sexe féminin.", value: "" },
          { title: "Phosphatases Alcaline ≥ 300 UI/l ou 2N.", value: "" },
          { title: "ALAT ≥ 100 UI/l ou 3N.", value: "" },        
          { title: "Amylasémie ≥ 4000 UI/l ou 10N.", value: "" },
        ]
      }]
      }, {
      id:6,
      name: "Blatchford (Score)",
      questions: [{
        title: "Urémie",
        responses: [
          { title: "0 - Urémie < 6,5 mmol/l.", value: "" },
          { title: "2 - Urémie ≥ 6,5 mmol/l et < 8 mmol/l.", value: "" },
          { title: "3 - Urémie ≥ 8 mmol/l et < 10 mmol/l.", value: "" },
          { title: "4 - Urémie ≥ 10 mmol/l et < 25 mmol/l.", value: "" },
          { title: "6 - Urémie ≥ 25 mmol/l.", value: "" },
                  
        ]
      },
      {
        title: "Taux d'hémoglobine selon sexe",
        responses: [
          { title: "0 - Hémoglobine ≥ 13 g/dl.", value: "" },
          { title: "1 - Hémoglobine ≥ 12 g/dl et < 13g/dl.", value: "" },
          { title: "3 - Hémoglobine ≥ 10 g/dl et < 12g/dl.", value: ""},
          { title: "6 - Hémoglobine < 10g/dl.", value: "" }

        ]
        
        },
      {
        title: "Pression artérielle systolique",
        responses: [
          { title: "0 - P.A.S. ≥ 110 mmHg.", value: "" },
          { title: "1 - P.A.S. ≥ 100 mmHg et < 110 mmHg.", value: "" },
          { title: " - P.A.S. ≥ 90 mmHg et < 100 mmHg.", value: "" },
          { title: "3 - P.A.S. < 90 mmHg.", value: "" },
        ]
        },
      {
        title: "Fréquence cardiaque",
        responses: [
          { title: "0 - F.C. < 100/mn.", value: "" },
         { title: "1 - F.C. ≥ 100/mn.", value: "" }

        ]
        },
        {
          title: "Melaena",
          responses: [
            { title: "0 - Absence de melaena.", value: "" },
             { title: "1 - Présence de melaena.", value: "" }

        ]
        },
        {
          title: "Syncope",
          responses: [
            { title: "0 - Absence de syncope.", value: "" },
            { title: "2 - Présence d'une ou plusieurs syncopes.", value: "" }

        ]
        },
      {
        title: "Hépathopathie",
        responses: [
          { title: "0 - Absence d'hépatopathie.", value: "" },
         { title: "2 - Présence d'une hépatopathie.", value: "" }

        ]
        },
      {
        title: "Insuffisance cardiaque",
        responses: [
          { title: "0 - Absence d'insuffisance cardiaque.", value: "" },
           { title: "2 - Présence d'une insuffisance cardiaque.", value: "" }

        ]
      }]
      }, {
      id:7,
      name: "Child-Pugh (Score)",
      questions: [{
        title: "Bilirubine",
        responses: [
          { title: "1 - Bilirubine < 35 µmol/l.", value: "" },
          { title: "2 - Bilirubine ≥ 35 µmol/l et ≤ 50 µmol/l.", value: "" },
          { title: "3 - Bilirubine > 50 µmol/l.", value: "" }
        ]
      },{
        title: "Albumine",
        responses: [
          { title: "1 - Albumine > 35 g/l.", value: "" },
          { title: "2 - Albumine ≥ 28 g/l et ≤ 35 g/l.", value: "" },
          { title: "3 - Albumine < 28 g/l.", value: "" }
        ]
      },{
        title: "Ascite",
        responses: [
          { title: "1 - Absente", value: "" },
          { title: "2 - Modérée", value: "" },
          { title: "3 - Permanente", value: "" }
        ]
      },{
        title: "TP (%)",
        responses: [
          { title: "1 - Bilirubine < 35 µmol/l.", value: "" },
          { title: "2 - TP ≥ 40% et ≤ 50%", value: "" },
          { title: "3 - TP < 40%.", value: "" }
        ]
      },{
        title: "Encéphalopathie",
        responses: [
          { title: "1 - Absente.", value: "" },
          { title: "2 - Modérée", value: "" },
          { title: "3 - Invalidante", value: "" }
        ]
      },
      ]
      }, {
      id:8,
      name: "eLIFT, fibrose hépatique (Score)",
      questions: [{
        title: " Age",
        responses: [
          { title: "0 - Age < 40 ans.", value: "" },
          { title: "3 - Age ≥ 40 ans.", value: "" },
        ]
      },
      {
        title: " Genre",
        responses: [
          { title: "0 - Femme", value: "" },
           { title: "1 - Homme", value: "" },
        ]
        },
      {
        title: "ASAT (UI/L)",
        responses: [
          { title: "0 - ASAT < 35 UI/L.", value: "" },
          { title: "2 - ASAT ≥ 35 et ≤ 69 UI/L.", value: "" },
          { title: "4 - ASAT > 70 UI/L.", value: "" }


        ]
        },
      {
        title: "Gamma-GT (UI/L)",
        responses: [
          { title: "0 - Gamma-GT < 35 UI/L.", value: "" },
          
          { title: "1 - Gamma-GT ≥ 35 et ≤ 89 UI/L.", value: "" },
          { title: "2 - Gamma-GT > 90 UI/L.", value: "" }
        ]
        },
      {
        title: "Plaquettes (×10³/L)",
        responses: [
          { title: "0 - Plaquettes ≥ 250.", value: "" },
          
          { title: "1 - Plaquettes ≥ 170 et ≤ 249.", value: "" },
          { title: "4 - Plaquettes < 170.", value: "" }
        ]
        },
      {
        title: "Temps de Prothrombine (TP - %)",
        responses: [
          { title: "0 - TP ≥ 97%.", value: "" },
          
          { title: "2 - TP ≥ 84% et ≤ 96.%", value: "" },
          { title: "4 - TP < 84%.", value: "" }
        ]
      }]
      }, {
      id:9,
      name: "Fibrosis-4 (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id: 10,
      name: "Forrest (Classification)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:11,
      name: "GLOBE (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:12,
      name: "Harmless Acute Pancreatitis Score (HAPS)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:13,
      name: "Harvey-Bradshaw (Indice)",
      questions: [{
        title: "Bien être général",
        responses: [
          { title: "0 - Bon.", value: "" },
          { title: "1 - Moyen.", value: "" },
              { title: "2 - Médiocre.", value: "" },
                { title: "3 - Mauvais.", value: "" },
                  { title: "3 - Très mauvais.", value: "" },
        ]
      },
      {
        title: "Douleurs abdominales",
        responses: [
          { title: "0 - Aucune.", value: "" },
          { title: "1 - Faibles.", value: "" },
              { title: "2 - Moyennes.", value: "" },
                { title: "3 - Intenses.", value: "" },
        ]
        },
      {
        title: "Masse abdominale",
        responses: [
          { title: "0 - Aucune.", value: "" },
          { title: "1 - Douteuse.", value: "" },
              { title: "2 - Certaine.", value: "" },
                { title: "2 - Certaine.", value: "" },
        ]
        },
      {
        title: "",
        responses: [
          { title: "Arthralgies.", value: "" },
            { title: "Uvéite.", value: "" },
              { title: "Érythème noueux.", value: "" },
                { title: "Stomatite aphteuse.", value: "" },
                  { title: "Pyoderma gangrenosum.", value: "" },
                    { title: "Fissure anale.", value: "" },
          { title: "Nouvelle fistule.", value: "" },
                      { title: "Abcès.", value: "" },
        ]
      }]
      }, {
      id:14,
      name: "Imrie, Blamey, Osborne, Glasgow (Scores)",
      questions: [{
        title: "",
        responses: [
          { title: "Age > 55 ans.", value: "" },
           { title: "Leucocytes > 15000/mm³.", value: "" },
            { title: "Glycémie > 10 mmol/l (1,8 g/l) (en dehors diabète).", value: "" },
             { title: "Pa02 < 60 mmHg.", value: "" },
              { title: "Urée sanguine > 16 mmol/l.", value: "" },
               { title: "Calcémie < 2 mmol/l.", value: "" },
               { title: "Albuminémie < 32 g/l.", value: "" },
                { title: "LDH > 600 U/l (3,5 x Normale).", value: "" },
                 { title: "ASAT > 100 U/l (2 x Normale).", value: "" },
        ]
      },]
      }, {
      id:15,
      name: "Lichtiger (Score)",
      questions: [{
        title: "Diarrhées, nombre de selles/jour",
        responses: [
          { title: "0 - de 0 à 2 diarrhées/jour.", value: "" },
          { title: "1 - de 3 à 4 diarrhées/jour.", value: "" },
          { title: "2 - de 5 à 6 diarrhées/jour.", value: "" },
          { title: "3 - de 7 à 9 diarrhées/jour.", value: "" },
          { title: "4 - 10 diarrhées/jour et plus.", value: "" },
        ]
      },
      {
        title: "Diarrhée nocturne",
        responses: [
          { title: "0 - Non", value: "" },
           { title: "1 - Oui", value: "" },
        ]
        },
      {
        title: "Sang visible dans les selles",
        responses: [
          { title: "0 - Pas de sang visible.", value: "" },
          { title: "1 - Sang visible dans moins de 50% des selles.", value: "" },
          { title: "2 - Sang visible dans 50% des selles ou plus.", value: "" },
          { title: "3 - Sang visible dans 100% des selles.", value: "" },
        ]
        },
      {
        title: "Incontinence fécale",
        responses: [
          { title: "0 - Non", value: "" },
          { title: "1 - Oui", value: "" },
        ]
        },
      {
        title: "Douleurs abdominales",
        responses: [
          { title: "0 - Pas de sang visible.", value: "" },
           { title: "1 - Sang visible dans moins de 50% des selles.", value: "" },
          { title: "2 - Sang visible dans 50% des selles ou plus.", value: "" },

           { title: "3 - Sang visible dans 100% des selles.", value: "" }

        ]
        }, {
        title: "Bien être général",
        responses: [
          { title: "0 - Parfait.", value: "" },
          { title: "1 - Très bon.", value: "" },
          { title: "2 - Bon.", value: "" },
          { title: "3 - Moyen.", value: "" },
          { title: "4 - Mauvais.", value: "" },
          { title: "5 - Très mauvais.", value: "" },
        ]
        },
      {
        title: "Douleur abdominale provoquée",
        responses: [
          { title: "0 - Aucune.", value: "" },
          { title: "1 - Légère et localisée.", value: "" },
          { title: "2 - Légère à Moyenne et diffuse.", value: "" },
          { title: "3 - Importante.", value: "" },
        ]
      },
     
      {
        title: "Nécessité d’un antidiarrhéique&",
        responses: [
          { title: " 0 - Non", value: "" },
           { title: "1 - Oui", value: "" }

        ]
      }]
      }, {
      id:16,
      name: "Lille (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:17,
      name: "Maddrey (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:18,
      name: "MELD (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:19,
      name: "NAFLD (Score)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" }
        ]
      }]
      }, {
      id:20,
      name: "Ranson (Score)",
      questions: [{
        title: "A l'admission",
        responses: [
          { title: "Age > 55 ans", value: "" },
            { title: "Leucocytes > 16000/mm³", value: "" },
              { title: "Glycémie > 11 mmol/l (2 g/l)", value: "" },
          { title: "LDH > 1,5 x Normale", value: "" },
                  { title: "ASAT > 6 x Normale", value: "" },
        ]
      }, {
          title: "Dans les 48 heures",
          responses: [
            { title: "Baisse hématocrite > 10%", value: "" },
             { title: "Augmentation urémie > 1,8 mmol/l", value: "" },
            { title: "Calcémie < 2 mmol/l", value: "" },
            { title: "Pa02 < 60 mmHg", value: "" },
            { title: "Baisse Bicar > 4 mEq/l", value: "" },
            { title: "Séquestration liquides > 6 litres", value: "" },
        ]
      }]
      }, {
      id:21,
      name: "Rockall (Score)",
      questions: [{
        title: "Age",
        responses: [
          { title: "0 - Inférieur à 60 ans.", value: "" },
            { title: "1 - De 60 à 79 ans.", value: "" },
              { title: "2 - Supérieur à 79 ans.", value: "" },

        ]
      },
      {
        title: "Etat de choc",
        responses: [
          { title: "0 - Pas d'état de choc (Fc < 100 / mn, PAs > 100 mmHg).", value: "" },
            { title: "1 - Fc > 100 / mn, PAs > 100 mmHg", value: "" },
              { title: "2 - Fc > 100 / mn, PAs < 100 mmHg", value: "" },
        ]
        },
      {
        title: "Co-morbidité",
        responses: [
          { title: "0 - Aucune.", value: "" },
            { title: "2 - Insuffisance cardiaque, cardiopathie ischémique, tout autre antécédent majeur.", value: "" },
              { title: "3 - Insuffisance rénale, insuffisance hépatique, néoplasie disséminée.", value: "" },
        ]
        },
      {
        title: "Diagnostic",
        responses: [
          { title: "0 - Mallory-Weiss ou aucun.", value: "" },
            { title: "1 - Autres.", value: "" },
              { title: "2 - Cancer.", value: "" },
        ]
        },
      {
        title: "Signes de saugnement",
        responses: [
          { title: "0 - Aucun, ou quelques résidus noirs.", value: "" },
          { title: "2 - Sang dans le tractus digestif haut, caillot adhérent, vaisseau visible ou avec saignement.", value: "" },
        ]
      }]
      }, {
      id:22,
      name: "Truelove et Witts (Critéres)",
      questions: [{
        title: "",
        responses: [
          { title: "", value: "" },
            { title: "", value: "" },
              { title: "", value: "" },
        ]
      }]
    },
    ]
  },
  {
    id:11,
    name: "Infectiologie",
    image: "/assets/img/infectiologie.svg",
    diseasesLink: "/specialities/infectiologie",
    diseases: [
      {
        id:1,
    name: "Altemeier (Classification)",
    questions: [
      {
        title: "Risque infectieux lors d'une intervention chirurgicale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:2,
    name: "Bangui, SIDA (Définition)",
    questions: [
      {
        title: "Définition du stade SIDA.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:3,
    name: "CALL (Score)",
    questions: [
      {
        title: "Présence de Comorbidités",
        responses: [
          { title: "1 - Non", value: "" },
         {title: "4 - Oui", value: ""}

        ]
      },
      {
        title: "Age",
        responses: [
          { title: "1 - Age ≤ 60 ans.", value: "" },
           {title: "3 - Age > 60 ans.", value: ""},
        ]
      },
      {
        title: "Lymphopénie.",
        responses: [
          { title: "1 - Pas de lymphopénie", value: "" },
          {title: "3 - Lymphopénie", value: ""}

        ]
      },
      {
        title: "LDH",
        responses: [
          { title: "1 - LDH ≤ 250 U/L (1xN).", value: "" },
          { title: "2 - LDH > 250 U/L (1xN) et ≤ 500 U/L (2xN).", value: "" },
          {title: "3 - LDH > 500 U/L (2xN).", value: ""},
        ]
      }
    ]
  },
      {
    id:4,
    name: "Dakar (Score)",
    questions: [
      {
        title: "Incubation",
        responses: [
          { title: "0 - Durée d'incubation ≥ 7 jours ou inconnue.", value: "" },
          {title: "1 - Durée d'incubation < 7 jours.", value: ""},
        ]
      },
       {
        title: "Invasion",
        responses: [
          { title: "0 - Durée d'invasion ≥ 2 jours.", value: "" },
          {title: "1 - Durée d'invasion < 2 jours.", value: ""},
        ]
      },
        {
        title: "Porte d'entrée",
        responses: [
          { title: "0 - Portée d'entrée autre que ci-dessous ou inconnue.", value: "" },
          {title: "1 - Ombilic, Utérus, Brûlures, Fractures ouvertes complexes, Intervention chirurgicale, Injection intramusculaire.", value: ""},
        ]
      },
         {
        title: "Paroxysmes",
        responses: [
          { title: "0 - Absents.", value: "" },
          {title: "1 - Présents.", value: ""},
        ]
      },
          {
        title: "Température rectale",
        responses: [
          { title: "0 - Température ≤ 38,4°C.", value: "" },
          {title: "1 - Température > 38,4°C.", value: ""},
        ]
      },
           {
        title: "Fréquence cardiaque",
        responses: [
          { title: "0 - Pouls ≤ 120/mn.", value: "" },
          {title: "1 - Pouls > 120/mn.", value: ""},
        ]
      }
    ]
  },
      {
    id:5,
    name: "Hoen (Score)",
    questions: [
      {
        title: "Méningite bactérienne ou virale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:6,
    name: "Jones, RAA (Critères)",
    questions: [
      {
        title: "Critères diagnostics du RAA.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:7,
    name: "Mac Cabe (Score)",
    questions: [
      {
        title: "Qualification espérance de vie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:8,
    name: "MEDS (Score)",
    questions: [
      {
        title: "Score MEDS",
        responses: [
          { title: "Maladie terminale (décès attendu dans les 30 jours dans 50% des cas).", value: "" },
          { title: "Tachypnée (FR > 20/mn) ou Hypoxie (SaO2 < 90%).", value: "" },
          { title: "Choc septique.", value: "" },
          { title: "Plaquettes < 150.000/mm³.", value: "" },
          { title: "Leucocytes, formes jeunes > 5%.", value: "" },
          { title: "Age > 65 ans.", value: "" },
          { title: "Pneumopathie.", value: "" },
          { title: "Résident en secteur de long séjour / maison de retraite.", value: "" },
          {title: "Altération des fonctions supérieures.", value: ""}
        ]
      }
    ]
  },
      {
    id:9,
    name: "Paludisme, gravité (Critères)",
    questions: [
      {
        title: "Gravité paludisme à P. Falciparum.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:10,
    name: "RISSC (Score)",
    questions: [
      {
        title: "Scores abrégé et complet",
        responses: [
          { title: "Température > 38,2°C.", value: "" },
          { title: "Fréquence cardiaque > 120/mn.", value: "" },
          {title: "Pression artérielle systolique < 110 mmHg.", value: ""},
            {title: "Ventilation mécanique, ou fréquence ventilatoire ≥ 30/mn.", value: ""},
          { title: "Plaquettes < 150.000/mm³.", value: "" },
          { title: "Natrémie > 145 mEq/l.", value: "" },
          { title: "Bilirubinémie > 30 µmol/l.", value: "" },
          { title: "Pneumopathie.", value: "" },
          { title: "Péritonite.", value: "" },
                                          
        ]
      },
      {
        title: "Score complet seulement",
        responses: [
          { title: "Bactériémie Primaire.", value: "" },
          { title: "Infection à Cocci Gram positif", value: "" },
          { title: "Infection à Gram négatif aérobie", value: "" },
        ]
      }
    ]
  },
      {
    id:11,
    name: "Sepsis (Critères SEPSIS 3)",
    questions: [
      {
        title: "Définition et classification états septiques.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:12,
    name: "SIDA, stades OMS",
    questions: [
      {
        title: "Classification SIDA sur critères cliniques.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:13,
    name: "SRIS et Sepsis (Critères SEPSIS 1-2)",
    questions: [
      {
        title: "Classification états sepsis.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
        id:14,
    name: "UTI_D (Score)",
    questions: [
      {
        title: "Sexe",
        responses: [
          { title: "0 - Homme.", value: "" },
            {title: "1 - Femme.", value: ""},
        ]
      },
      {
        title: "Age",
        responses: [
          { title: "0 - Age ≤ 65 ans.", value: "" },
            {title: "1 - Age > 65 ans.", value: ""},
        ]
      }
      ,
      {
        title: "Antécédent d'infection urinaire",
        responses: [
          { title: "0 - Non.", value: "" },
            {title: "1 - Oui.", value: ""},
        ]
      },
      {
        title: "Neuropathie diabétique",
        responses: [
          { title: "0 - Non.", value: "" },
            {title: "1 - Oui.", value: ""},
        ]
      },
      {
        title: "Présence d'un signe urinaire",
        responses: [
          { title: "0 - Non.", value: "" },
            {title: "1 - Oui.", value: ""},
        ]
      },
      {
        title: "CRP positive (> 6mg/L)",
        responses: [
          { title: "0 - Non.", value: "" },
            {title: "1 - Oui.", value: ""},
        ]
      },
      {
        title: "Anémie",
        responses: [
          { title: "0 - Non.", value: "" },
            {title: "1 - Oui.", value: ""},
        ]
      }

    ]
  }
      ]
  },
  { 
    //Ruffier-Dickson (Test)
//Adaptation à l'effort.
//VO2max théorique
      id:12,
      name: "Médecine du Sport",
      image: "/assets/img/medsport.svg",
      diseasesLink: "/specialities/medsport",
    diseases: [
      {
        id:1,
        name: "Ruffier-Dickson (Test)",
        questions:[{
          title:"",
          responses:[
              {title:"",value:""}
          ]
        }]
      }, {
        id: 2,
        name: "VO2max théorique",
        questions:[{
          title:"",
          responses:[
              {title:"",value:""}
          ]
        }]
      }
    ]
  },
  {
    id:13,
      name: "Médecine Interne",
      image: "/assets/img/medinterne.svg",
      diseasesLink: "/specialities/medinterne",
    diseases:
      [
        {
    id:1,
    name: "Burch-Wartofsky (Score)",
    questions: [
      {
        title: "Diagnostic d'un thyrotoxicose.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Calcémie corrigée",
    questions: [
      {
        title: "Correction calcémie selon protides ou albumine.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Déficit en eau libre",
    questions: [
      {
        title: "Déficit en eau sur hypernatrémie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Déficit en sodium",
    questions: [
      {
        title: "Déficit en sodium sur hyponatrémie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 5,
    name: "FH Score (Dutch)",
    questions: [
      {
        title: "Antécédents Familiaux",
        responses: [
          { title: "1 - Le patient a un parent au premier degré ayant souffert d’une maladie coronarienne prématurée (hommes < 55 ans ; femmes < 60 ans).", value: "" },
          {title: "1 - Le patient a un parent au premier degré avec un taux connu de LDL-cholestérol > 95e percentile selon l’âge et le sexe pour le pays.", value: ""},
          {title: "2 - Le patient a un parent au premier degré avec des xanthomes tendineux et/ou un arc cornéen.", value: ""},
          {title: "2 - Le patient a un (ou des) enfant(s) < 18 ans avec un taux de LDL-cholestérol > 95e percentile selon l’âge et le sexe pour le pays.", value: ""},
        ]
      },
       {
        title: "Antécédents Personnels",
        responses: [
          { title: "2 - Le patient a une maladie coronarienne prématurée (hommes < 55 ans ; femmes < 60 ans).", value: "" },
          {title: "1 - Le patient a une artériopathie oblitérante des membres inférieurs ou une maladie cérébrale vasculaire prématurée (hommes < 55 ans ; femmes < 60 ans).", value: ""},
        ]
      },
        {
        title: "Signes Cliniques",
        responses: [
          { title: "6 - Le patient a des xanthomes tendineux.", value: "" },
          {title: "4 - Le patient a un arc cornéen chez une personne < 45 ans.", value: ""},
        ]
      },
         {
        title: "Quel est le taux de LDL-cholestérol du patient ?",
        responses: [
          { title: "0 - LDL-C : < 155 mg/dL ( < 4,0 mmol/L).", value: "" },
          { title: "1 - LDL-C : 155 - 190 mg/dL(4,0 – 4,9 mmol/L).", value: "" },
          { title: "3 - LDL-C : 191 - 250 mg/dL(5,0 – 6,4 mmol/L).", value: "" },
          { title: "5 - LDL-C : 251 - 325 mg/dL (6,5 – 8,4 mmol/L).", value: "" },
          {title: "8 - LDL-C : > 325 mg/dL ( > 8,5 mmol/L).", value: ""},
        ]
      },
          {
        title: "Tests de Génétique Moléculaire (Analyses ADN)",
        responses: [
          {title: "8 - Suite à des tests de génétique moléculaire, est-ce-qu’une mutation causale a été identifiée dans les gènes LDLR, APOB ou PCSK9 ?", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "Fructosamine-HbA1c, équivalence",
    questions: [
      {
        title: "Equivalence fructosamine et hémoglobine glyquée.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:7,
    name: "HbA1c vers Glycémie Moyenne",
    questions: [
      {
        title: "Conversion hémoglobine glyquée.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:8,
    name: "HOMA-IR (Indice)",
    questions: [
      {
        title: "Evaluation de l'insulinorésistance.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Kaliémie corrigée",
    questions: [
      {
        title: "Kaliémie selon pH.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:10,
    name: "Myasthénique de Garche (Score)",
    questions: [
      {
        title: "Manoeuvre de Barré",
        responses: [
          { title: "15 - Pendant 150 secondes (2'30).", value: "" },
          { title: "10 - Pendant 100 secondes (1'40).", value: "" },
          { title: " 5 - Pendant 50 secondes.", value: "" },
          { title: " 0 - Impossible.", value: "" }

        ]
      },
         {
        title: "Manoeuvre de Mingazzini",
        responses: [
          { title: "15 - Pendant 75 secondes (1'15).", value: "" },
          { title: "10 - Pendant 50 secondes.", value: "" },
          { title: "  5 - Pendant 25 secondes.", value: "" },
           {title: " 0 - Impossible.", value: ""},

        ]
      },
            {
        title: "Flexion de la tête",
        responses: [
          { title: "10 - Contre résistance.", value: "" },
          { title: "  5 - Sans résistance.", value: "" },
          {title: " 0 - Impossible.", value: ""},
        ]
      },
               {
        title: "Passage de la position couchée à la position assise",
        responses: [
          { title: "10 - Sans l'aide des mains.", value: "" },
          {title: " 0 - Impossible.", value: ""}

        ],
      },
                  {
        title: "Oculomotricité extrinsèque",
        responses: [
          { title: "10 - Normale.", value: "" },
          { title: "  5 - Ptosis isolé.", value: "" },
          {title: "   0 - Diplopie.", value: ""},


        ]
      },
      {
        title: "Occlusion palpébrale",
        responses: [
          { title: "10 - Complète.", value: "" },
          { title: "  5 - Incomplète.", value: "" },
           {title: " 0 - Nulle.", value: ""}

        ]
      },
                        {
        title: "Mastication",
        responses: [
          { title: "10 - Normale.", value: "" },
          { title: "  5 - Diminuée.", value: "" },
            {title: " 0 - Nulle.", value: ""}

        ]
      },
                           {
        title: "Déglutition",
        responses: [
          { title: "10 - Normale.", value: "" },
          { title: "10 - Normale.", value: "" },
            {title: "10 - Normale.", value: ""},
        ]
      },
                              {
        title: "Phonation",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:11,
    name: "Natrémie corrigée",
    questions: [
      {
        title: "Natrémie selon teneur en eau.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:12,
    name: "Osmolarité plasmatique",
    questions: [
      {
        title: "Calcul osmolarité plasmatique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id: 13,
    name: "Test de Marche 6 minutes",
    questions: [
      {
        title: "Evaluation de l'état général par une distance de marche en 6 minutes.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:14,
    name: "Trou anionique plasmatique",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:15,
    name: "Trou anionique urinaire",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

  },
  {
    id:1,
      name: "Médecine d'Urgence",
      image: "/assets/img/medurgence.svg",
      diseasesLink: "/specialities/medurgence",
    diseases: [
      {
        id:1,
        name: "ABC, Transfusion(Score)",
    questions: [
      {
        title: "",
        responses: [
          { title: "Traumatisme pénétrant.", value: "" },
          { title: "P.A. Systolique ≤ 90 mmHg.", value: "" },
          { title: "Fréquence cardiaque ≥ 120/mn.", value: "" },
             {title: "Présence d’un épanchement intrapéritonéal (FAST echo).", value: ""}


        ]
      }
    ]
  },
      {
    id:2,
    name: "Autonomie en Oxygène",
    questions: [
      {
        title: "Autonomie bouteille O2 selon consommation.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:3,
    name: "Brest (Score)",
    questions: [
      {
        title: "Etat général",
        responses: [
          {title: " 1 - Age > 65 ans.", value: ""}
        ]
      },
        {
        title: "Anamnèse",
        responses: [
          { title: " 2 - Dyspnée brutale.", value: "" },
          { title: " 1 - Début nocturne.", value: "" },
           {title: " 1 - Orthopnée.", value: ""}


        ]
      }
      ,
          {
        title: "Facteurs de risque",
        responses: [
          { title: " 2 - Antécédent de poussées d’insuffisance cardiaque.", value: "" },
          {title: "-2 - Antécédent de pathologie pulmonaire chronique.", value: ""},
          {title: " 1 - Antécédent d'infarctus du myocarde.", value: ""},
        ]
      }
,  {
        title: "Examen clinique",
        responses: [
          { title: " 2 - Crépitants pulmonaires.", value: "" },
         {title: " 1 - Œdèmes des Membres inférieurs.", value: ""}

        ]
      },
      {
        title: "Anomalies sur l'ECG",
        responses: [
          { title: "  1 - Anomalies du segment ST.", value: "" },
         {title: " 1 - Fibrillation atriale ou Flutter.", value: ""}

        ]
      }


    ]
  },
      {
    id:4,
    name: "Canadian Syncope Risk Score (CSRS)",
    questions: [
      {
        title: "Évaluation clinique.",
        responses: [
          { title: "-1 - Prédispositions aux symptômes vasovagaux.", value: "" },
          { title: " 1 - Histoire de maladie cardiaque.", value: "" },
         {title: " 2 - Pression artérielle systolique < 90 ou > 180 mmHg.", value: ""}
        ]
      },
       {
        title: "Investigations",
        responses: [
          { title: " 2 - Troponine augmentée (>99e percentile).", value: "" },
          { title: " 1 - Axe QRS anormal (< -30° ou > 100°).", value: "" },
          { title: " 1 - Durée QRS > 130 ms.", value: "" },
          {title: " 2 - Intervalle QT corrigé > 480 ms.", value: ""}




        ]
      },
       {
        title: "Diagnostic aux urgences",
        responses: [
          { title: "-2 - Syncope vasovagale.", value: "" },
           {title: " 2 - Syncope cardiogénique.", value: ""}

        ]
      }
    ]
  },
      {
    id:5,
    name: "CCMU (Classification)",
    questions: [
      {
        title: "Degrés gravités à l'entrée aux urgences.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:6,
    name: "GEMSA (Classification)",
    questions: [
      {
        title: "Consommation ressources service d'urgences.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
        id: 7,
    name: "Hypothermie (Classifications)",
    questions: [
      {
        title: "Classifications sévérité hypothermie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:8,
    name: "ISS - RTS - TRISS (Scores)",
    questions: [
      {
        title: "Gravité polytraumatisé.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:9,
    name: "MGAP (Score)",
    questions: [
      {
        title: "Pression artérielle systolique :",
        responses: [
          { title: "5 - P.A.S. > 120 mmHg.", value: "" },
          { title: "3 - P.A.S. ≥ 60 mmHg et ≤ 120 mmHg.", value: "" },
           {title: "0 - P.A.S. > 60 mmHg.", value: ""},
        ]
      }, {
        title: "Traumatisme fermé :",
        responses: [
          { title: "4 - Oui.", value: "" },
           {title: "0 - Non.", value: ""}

        ]
      }, {
        title: "Age < 60 ans :",
        responses: [

          { title: "4 - Oui.", value: "" },
           {title: "0 - Non.", value: ""}        ]
      }
    ]
  },
      {
    id:10,
    name: "NEWS, (Score)",
    questions: [
      {
        title: "Fréquence Respiratoire",
        responses: [
          { title: "  3   - FR ≤ 8.", value: "" },
          { title: "  1   - 9 ≤ FR ≤ 11.", value: "" },
          { title: "  0   - 12 ≤ FR ≤ 20.", value: "" },
          { title: "  2   - 21 ≤ FR ≤ 24.", value: "" },
          {title: "  3   - FR ≥ 25.", value: ""},
        ]
      },{
        title: "Saturation en Oxygène",
        responses: [
          { title: "  3   - SpO2 ≤ 91%.", value: "" },
          { title: "  2   - 92% ≤ SpO2 ≤ 93%.", value: "" },
          { title: "  1   - 94% ≤ SpO2 ≤ 95%.", value: "" },
          {title: "  0   - SpO2 ≥ 96%.", value: ""},
        ]
      },{
        title: "Supplémentation en Oxygène",
        responses: [
          { title: "  2   - Oui.", value: "" },
          {title: "   0   - Non.", value: ""},
        ]
      },{
        title: "Température",
        responses: [
          { title: "  3   - Temp. ≤ 35,0 °C.", value: "" },
          { title: "  1   - 35,1 ≤ Temp. ≤ 36,0 °C.", value: "" }, 
          { title: "  0   - 36,1 ≤ Temp. ≤ 38,0 °C.", value: "" }, 
          { title: "  1   - 38,1 ≤ Temp. ≤ 39,0 °C.", value: "" },
          { title: "  2   - Temp. ≥ 39,1 °C.", value: "" },
        ]
      },{
        title: "Pression Artérielle Systolique",
        responses: [

          { title: "  3   - PAs ≤ 90 mmHg.", value: "" },
          { title: "  2   - 91 ≤ PAs ≤ 100 mmHg.", value: "" }, 
          { title: "  1   - 101 ≤ PAs ≤ 110 mmHg.", value: "" }, 
          { title: "  0   - 111 ≤ PAs ≤ 219 mmHg.", value: "" },
          { title: "", value: "" },        ]
      },{
        title: "Fréquence Cardiaque",
        responses: [

          { title: "  3   - FC ≤ 40 /mn.", value: "" },
          { title: "  1   - 41 ≤ FC ≤ 50 /mn.", value: "" }, 
          { title: "  0   - 51 ≤ FC ≤ 90 /mn.", value: "" }, 
          { title: "  1   - 91 ≤ FC ≤ 110 /mn.", value: "" },
          { title: "  2   - 111 ≤ FC ≤ 130 /mn.", value: "" },
         { title: "  3   - FC ≥ 131.", value: "" }, ]
      },{
        title: "Conscience",
        responses: [
          {title: "  0   - Alerte.", value: ""},
          {title: "  3   - Réagit seulement à la Voix, seulement à la Parole, Inconscient.", value: ""}

        ]
      },
    ]
  },
      {
        id: 11,
    name: "NEWS 2, (Score)",
    questions: [
      {
        title: "Fréquence Respiratoire (par minute).",
        responses: [
          { title: "  3   - FR ≤ 8 /mn.", value: "" },
          { title: "  1   - 9 ≤ FR ≤ 11 /mn.", value: "" },
          { title: "  0   - 12 ≤ FR ≤ 20 /mn.", value: "" },
          { title: "  2   - 21 ≤ FR ≤ 24 /mn.", value: "" },
          { title: "  3   - FR ≥ 25 /mn.", value: "" },


        ]
      },
      {
        title: "Gravité à l'accueil des urgences.",
        responses: [
          { title: "  3   - SpO2 ≤ 91%.", value: "" },
          { title: "  2   - 92% ≤ SpO2 ≤ 93%.", value: "" },
              {title: "  1   - 94% ≤ SpO2 ≤ 95%.", value: ""},
            {title: "  0   - SpO2 ≥ 96%.", value: ""},
        ]
      },
      {
        title: "Air ou Oxygène",
        responses: [
          { title: "  2   - Administration d'Oxygène.", value: "" },
          {title: "  0   - Air Ambiant.", value: ""},
        ]
      },
      {
        title: "Pression Artérielle Systolique (mmHg)",
        responses: [
          { title: "  3   - PAs ≤ 90 mmHg.", value: "" },
          { title: "  2   - 91 ≤ PAs ≤ 100 mmHg.", value: "" },
          { title: "  1   - 101 ≤ PAs ≤ 110 mmHg.", value: "" },
                {title: "  0   - 111 ≤ PAs ≤ 219 mmHg.", value: ""},
                  {title: "  3   - PAs ≥ 220 mmHg.", value: ""},
        ]
      },{
        title: "Fréquence Cardiaque (par minute)",
        responses: [
          { title: "  3   - FC ≤ 40 /mn.", value: "" },
          { title: "  1   - 41 ≤ FC ≤ 50 /mn.", value: "" },
          { title: "  0   - 51 ≤ FC ≤ 90 /mn.", value: "" },
          { title: "  1   - 91 ≤ FC ≤ 110 /mn.", value: "" },
          { title: "  2   - 111 ≤ FC ≤ 130 /mn.", value: "" },
          {title: "  3   - FC ≥ 131.", value: ""},
        ]
      },{
        title: "Conscience",
        responses: [
          { title: "  0   - Alerte.", value: "" },
          {title: "  3   - Confus, réagit seulement à la Voix, seulement à la Parole, Inconscient.", value: ""},

        ]
      },{
        title: "Température (°C)",
        responses: [
          { title: "  3   - Temp. ≤ 35,0 °C.", value: "" },
          { title: "  1   - 35,1 ≤ Temp. ≤ 36,0 °C.", value: "" },
          {title: "  0   - 36,1 ≤ Temp. ≤ 38,0 °C.", value: ""},
          {title: "  1   - 38,1 ≤ Temp. ≤ 39,0 °C.", value: ""},
          {title: "  2   - Temp. ≥ 39,1 °C.", value: ""}


        ]
      },
      

    ]
  },
      {
    id:12,
    name: "Ring et Messmer (Classification)",
    questions: [
      {
        title: "Classification anaphylaxie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:13,
    name: "Shock Index",
    questions: [
      {
        title: "Gravité état de choc et polytraumatisé.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
        id:14,
    name: "Vittel (Critères)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
    ]
  },
  {
    id: 14,
      name: "Néphrologie",
      image: "/assets/img/nephrologie.svg",
      diseasesLink: "/specialities/néphrologie",
    diseases: [
      {
        id: 1,
    name: "Clearance de la créatinine (CKD-EPI)",
    questions: [
      {
        title: "Evaluation fonction rénale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
        id: 2,
    name: "Clearance de la créatinine (Cockcroft)",
    questions: [
      {
        title: "Evaluation fonction rénale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:3,
    name: "Clearance de la créatinine (MDRD simplifiée)",
    questions: [
      {
        title: "Evaluation fonction rénale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:4,
    name: "Clearance de la créatinine (Mesurée)",
    questions: [
      {
        title: "Evaluation fonction rénale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:5,
    name: "Clearance de la créatinine Pédiatrique (Schwartz)",
    questions: [
      {
        title: "Evaluation fonction rénale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:6,
    name: "Diurèse horaire",
    questions: [
      {
        title: "Diurèse selon volume et poids.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:7,
    name: "Fraction excrétée Acide urique",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:8,
    name: "Fraction excrétée Sodium",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:9,
    name: "Fraction excrétée Urée",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:10,
    name: "Insuffisance Rénale (Stades)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:11,
    name: "Osmolarité urinaire",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
      {
    id:12,
    name: "Ratio Protéinurie/Créatininurie",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
    ]
  },
  {
    id:15,
      name: "Neurologie",
      image: "/assets/img/neurologie.svg",
      diseasesLink: "/specialities/neurologie",
      diseases:[
        {
    id:1,
    name: "ABCD² (Score)",
    questions: [
      {
        title: "Age",
        responses: [
          { title: "0 - Inférieur à 60 ans.", value: "" },
                    {title: "1 - Supérieur ou égal à 60 ans.", value: ""},

        ]
      },
       {
        title: "Pression artérielle",
        responses: [
          { title: "0 - Normale.", value: "" },
                    {title: "1 - Supérieure à 140 / 90 mmHg.", value: ""},

        ]
      },
        {
        title: "Clinique",
        responses: [
          {title: "0 - Autres signes que ceux ci-dessous.", value: ""},
          { title: "1 - Trouble du langage sans faiblesse musculaire.", value: "" },
             {title: "2 - Faiblesse musculaire unilatérale.", value: ""},


        ]
      },
         {
        title: "Durée",
        responses: [
          { title: "0 - Moins de 10 minutes.", value: "" },
          { title: "1 - Entre 10 et 59 minutes.", value: "" },
           {title: "2 - Supérieure ou égale à 60 minutes.", value: ""},


        ]
      },
          {
        title: "Diabéte",
        responses: [
          { title: "0 - Absence de diabète.", value: "" },
          {title: "1 - Présence d'un diabète.", value: ""},

        ]
      }
    ]
  },
        {
    id:2,
    name: "Barthel (Index)",
    questions: [
      {
        title: "Alimentation",
        responses: [
          { title: "10 - Indépendant. Capable de se servir des instruments nécessaires. Prend ses repas en un temps raisonnable.", value: "" },
          { title: "  5 - A besoin d'aide par exemple pour couper.", value: "" },
           {title: "  0 - Dépendance.", value: ""},


        ]
      },
      {
        title: "Continence urinaire",
        responses: [
          { title: "10 - Continence.", value: "" },
          { title: "  5 - Fuites occasionnelles.", value: "" },
          { title: "  0 - Incontinence ou prise en charge personnelle si sonde vésicale à demeure.", value: "" },


        ]
      },{
        title: "Continence rectale",
        responses: [
          { title: "10 - Continence. Capable de s'administrer un lavement ou un suppositoire.", value: "" },
          { title: "  5 - Accidents occasionnels. A besoin d'aide pour un lavement ou un suppositoire si nécessaire.", value: "" },
          {title: "Incotinence", value: ""},


        ]
      },{
        title: "Usage des W.C.",
        responses: [
          { title: "10 - Autonome. Se sert seul du papier hygiénique, de la chasse d'eau.", value: "" },
          { title: "  5 - Intervention d'une tierce personne.", value: "" },
           {title: "    0 - Dépendance totale.", value: ""},


        ]
      },{
        title: "Soins personnels",
        responses: [
          { title: "  5 - Possible sans aide.", value: "" },
          {title: "  0 - Dépendance totale.", value: ""},

        ]
      },{
        title: "Bain",
        responses: [
          { title: "  5 - Possible sans aide.", value: "" },
           {title: "  0 - Dépendance totale.", value: ""},

        ]
      },{
        title: "Habillage",
        responses: [
          { title: "10 - Indépendance (pour boutonner un bouton, fermer une fermeture éclaire, lacer ses lacets, mettre des brettelles).", value: "" },
          { title: "  5 - A besoin d'aide, mais fait la moitié de la tâche en un temps correcte.", value: "" },
           {title: "  0 - Dépendance complète.", value: ""},


        ]
      },{
        title: "Transfert du lit au fauteuil",
        responses: [
          { title: "15 - Indépendant, y compris pour faire fonctionner un fauteuil roulant.", value: "" },
          { title: "10 - Peut s'asseoir mais doit être installé.", value: "" },
        { title: "  5 - Capable de s'asseoir, mais nécessite une aide maximale pour le transfert.", value: "" },
        { title: "  0 - Incapacité totale.", value: "" },

          

        ]
      },{
        title: "Déplacement",
        responses: [
          { title: "15 - Marche avec soutient ou pas pour plus de 50 mètres.", value: "" },
          { title: "10 - Marche avec aide pour 50 mètres.", value: "" },
          { title: "  5 - Indépendant pour faire 50 mètres en fauteuil roulant.", value: "" },
          { title: "  0 - Dépendance complète.", value: "" },


        ]
      },{
        title: "Escaliers",
        responses: [
          { title: "10 - Indépendant, peut se servir de cannes.", value: "" },
          { title: "  5 - A besoin d'aide ou de surveillance.", value: "" },
          {title: "   0 - Incapacité totale.", value: ""},


        ]
      },
    ]
  },
        {
    id:3,
    name: "DN4, neuropathies (Questionnaire)",
    questions: [
      {
        title: "La douleur présente-t-elle une ou plusieurs des caractéristiques suivantes ?",
        responses: [
          { title: "Brûlure.", value: "" },
          { title: "Sensation de froid douloureux.", value: "" },
          {title: "Décharges électriques", value: ""},
        ]
      },
        {
        title: "La douleur est-elle associée dans la même région à un ou plusieurs des symptômes suivants ?",
        responses: [
          { title: "Fourmillements.", value: "" },
          { title: "Picotements", value: "" },
          { title: "Engourdissements", value: "" },
          {title: "Démangeaisons", value: ""},



        ]
      },
          {
        title: "La douleur est‐elle localisée dans un territoire où l'examen met en évidence :",
        responses: [
          { title: "Hypoesthésie au tact.", value: "" },
          {title: "Hypoesthésie à la piqûre.", value: ""},
        ]
      },
            {
        title: "La douleur est-elle provoquée ou augmentée par :",
        responses: [
          {title: "Le frottement", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "EDSS (Score) : Echelle",
    questions: [
      {
        title: "Suivi évolution atteinte neurologique.",
        responses: [

          { title: "", value: "" },
          { title: "", value: "" },
          { title: "", value: "" },
          { title: "", value: "" },        ]
      }
    ]
  },
        {
          id:5,
          name: "Epworth (Echelle)",
          questions: [
            {
              title: "Pendant que vous êtes occupé à lire un document",
              responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },              ]
            },
            {
              title: "Devant la télévision ou au cinéma",
              responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },              ]
            },
              {
        title: "Assis inactif dans un lieu public (salle d'attente, théâtre, cours, congrès ...)",
        responses: [
          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },
         



        ]
            },
                {
        title: "Passager, depuis au moins une heure sans interruptions, d'une voiture ou d'un transport en commun (train, bus, avion, métro ...)",
        responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },        ]
            },
                  {
        title: "Allongé pour une sieste, lorsque les circonstances le permettent",
        responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },        ]
            },
                    {
        title: "En position assise au cours d'une conversation (ou au téléphone) avec un proche",
        responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },        ]
            },
                      {
        title: "Tranquillement assis à table à la fin d'un repas sans alcool",
        responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },        ]
      },
        {
        title: "Au volant d'une voiture immobilisée depuis quelques minutes dans un embouteillage",
        responses: [

          { title: "0 - Jamais d'assoupissement : « cela ne m'arrive jamais ».", value: "" },
          { title: "1 - Risque faible d'assoupissement : « il y a un petit risque que cela m'arrive ».", value: "" },
          { title: "2 - Risque modéré d'assoupissement : « il m'arrive de somnoler dans ces circonstances ».", value: "" },
          { title: "3 - Risque élevé d'assoupissement : « je somnole à chaque fois dans cette situation ».", value: "" },        ]
      }
    ]
  },
        {
    id:6,
    name: "FOUR (Score)",
    questions: [
      {
        title: "Réponse occulaire",
        responses: [
          { title: "4 - Paupières ouvertes spontanément ou ouvertes par l'examinateur montrant une poursuite oculaire ou un clignement à la demande (rechercher la poursuite oculaire horizontale. Si celle-ci est absente, rechercher la poursuite verticale).", value: "" },
          { title: "3 - Paupières ouvertes mais absence de poursuite oculaire.", value: "" },
          { title: "2 - Paupières fermées, s'ouvrant à la stimulation auditive forte.", value: "" },
          { title: "1 - Paupières fermées, s'ouvrant à la stimulation douloureuse.", value: "" },
          {title: "0 - Paupières restant fermées à la stimulation douloureuse.", value: ""},
        ]
      },
        {
        title:" Réponse motrice",
        responses: [

          { title: "4 - Montre son pouce, montre le poing, fait le V de la victoire (le patient doit faire au moins un des trois signes avec une de ses mains).", value: "" },
          { title: "3 - Localisation de la douleur.", value: "" },
          { title: "2 - Flexion à la stimulation douloureuse (anciennement décortication).", value: "" },
        { title: "1 - Extension à la stimulation douloureuse (anciennement décérébration).", value: "" },
         {title: "0 - Absente à la douleur ou état de mal myoclonique généralisé.", value: ""},        ]
      },
          {
        title: "Réflexes du tronc",
        responses: [

          { title: "4 - Réflexes pupillaire et cornéen présents.", value: "" },
          { title: "3 - Une pupille en mydriase fixée.", value: "" },
          { title: "2 - Réflexe pupillaire ou cornéen absent.", value: "" },
          { title: "1 - Réflexes pupillaire et cornéen absents mais réflexe de toux présent", value: "" },
          {title: "0 - Absence des réflexes pupillaires, cornéen et du réflexe de toux.", value: ""},        ]
      },  {
        title: "Respiration",
        responses: [

          { title: "4 - Patient non intubé, respiration régulière.", value: "" },
          { title: "3 - Patient non intubé, respiration de Cheyne-Stokes.", value: "" },
          { title: "2 - Patient non intubé, respiration irrégulière.", value: "" },
          { title: "1 - Patient intubé, capable de déclencher le ventilateur (respiration à une fréquence supérieure à celle réglée sur le ventilateur).", value: "" },
          {title: "0 - Patient intubé, incapable de déclencher le ventilateur (respiration à une fréquence égale à celle du ventilateur ou apnée).", value: ""},        ]
      }
    ]
  },
        {
    id:7,
    name: "Glasgow (Score)",
    questions: [
      {
        title: "Ouverture des Yeux",
        responses: [
          { title: "1 - Aucune.", value: "" },
               {title: "2 - A la douleur.", value: ""},
          { title: "3 - A la demande.", value: "" },
                         {title: "4 - Spontanée.", value: ""},
        ]
      },
      {
        title: "Réponse Verbale",
        responses: [
          { title: "1 - Aucune.", value: "" },
               {title: "2 - Incompréhensible.", value: ""},
               {title: "3 - Inappropriée.", value: ""},
          { title: "4 - Confuse.", value: "" },
                         {title: "5 - Orientée.", value: ""},
        ]
      },
      {
        title: "Meilleure réponse Motrice",
        responses: [
          { title: "", value: "" },
          
          { title: "1 - Aucune.", value: "" },
               {title: "2 - Décérébration (Extension).", value: ""},
               {title: "3 - Décortication (Flexion).", value: ""},
          { title: "4 - Evitement non adapté.", value: "" },
          { title: "5 - Orientée à la douleur.", value: "" },
                {title: "6 - Obéit à la demande.", value: ""},

        ]
      }
    ]
  },
        {
    id:8,
    name: "Glasgow Pédiatrique < 2 ans (Score)",
    questions: [
      {
        title: "Ouverture des Yeux",
        responses: [
          { title: "1 - Aucune.", value: "" },
          { title: "2 - Aux stimuli douloureux.", value: "" },
          { title: "3 - Lorsqu'il pleure.", value: "" },
          { title: "4 - Spontanée.", value: "" },
        ]
      },
         {
        title: "Réponse Verbale",
        responses: [
          { title: "1 - Aucune.", value: "" },
          { title: "2 - Gémissements.", value: "" },
          { title: "3 - Hurlements inappropriés.", value: "" },
          { title: "4 - Pleure", value: "" },
          { title: "5 - Agit normalement.", value: "" },

        ]
      },
            {
        title: "Meilleure réponse Motrice",
        responses: [ 
          { title: "1 - Aucune.", value: "" },
          { title: "2 - Extension anormale (décérébration).", value: "" },
          { title:" 3 - Flexion anormale (décortication).", value: "" },
          { title: "4 - Se retire à la douleur.", value: "" },
          { title: "5 - Se retire au toucher.", value: "" },
          { title: "6 - Mouvements spontanés intentionnels.", value: "" },
        ]
      }
    ]
  },
        {
    id:9,
    name: "Glasgow Pédiatrique 2-5 ans (Score)",
    questions: [
      {
        title: "Ouverture des Yeux",
        responses: [
          { title: "1 - Aucune.", value: "" },
             {title: "2 - Aux stimuli douloureux.", value: ""},
                {title: "3 - Aux stimuli verbaux.", value: ""},
                   {title: "4 - Spontanée.", value: ""},
        ]
      },
      {
        title: "Réponse Verbale",
        responses: [
          {title: "1 - Aucune.", value: ""},
             {title: "2 - Gémit aux stimuli douloureux.", value: ""},
                {title: "3 - Hurle, est inconsolable.", value: ""},
                   {title: "4 - Mots inappropriés, pleure, est consolable.", value: ""},
                      {title: "5 - Mots appropriés, sourit, fixe et suit du regard.", value: ""},

        ]
      },
      {
        title: "Meilleure réponse Motrice",
        responses: [
          {title: "1 - Aucune.", value: ""},
          {title: "2 - Extension à la douleur (décérébration).", value: ""},
          {title: "3 - Flexion à la douleur (décortication).", value: ""},
          { title: "4 - Se retire à la douleur.", value: "" },
          {title: "4 - Se retire à la douleur.", value: ""},

        ]
      }

    ]
  },
        {
    id:10,
    name: "Liège (Score)",
    questions: [
      {
        title: "Ouverture des Yeux",
        responses: [
          {title: "1 - Aucune.", value: ""},
          {title: "2 - A la douleur.", value: ""},
          {title: "3 - A la demande.", value: ""},
          {title: "4 - Spontanée.", value: ""},
        ]
      },
      {
        title: "Réponse Verbale",
        responses: [
          { title: "1 - Aucune.", value: "" },
          { title: "2 - Incompréhensible.", value: "" },
          { title: "Inappropriée", value: "" },
          { title: "4 - Confuse.", value: "" },
          {title: "5 - Orientée.", value: ""},
        ]
      },
      {
        title: "Meilleure réponse Motrice",
        responses: [
          {title: "1 - Aucune.", value: ""},

          { title: "2 - Décérébration (Extension).", value: "" },
          { title: "3 - Décortication (Flexion).", value: "" },
          { title: "4 - Evitement non adapté.", value: "" },
          { title: "5 - Orientée à la douleur.", value: "" },
          {title: "6 - Obéit à la demande.", value: ""},          
        ]
      },
      {
        title: "Réflexes du Tronc Cérébral",
        responses: [
          { title: "0 - Aucun.", value: "" },
          
          { title: "1 - Réflexe oculo-cardiaque (diminution de la fréquence cardiaque lors de la pression des yeux).", value: "" },
          { title: "2 - Réflexe oculo-céphalogyre horizontal (mouvement des yeux dans le sens horizontal dans le sens inverse du mouvement imposé de rotation de la tête).", value: "" },
          { title: "3 - Réflexe photomoteur (contraction de la pupille lors d'une stimulation lumineuse).", value: "" },
          { title: "4 - Réflexe oculo-céphalogyre vertical (mouvement des yeux dans le sens vertical dans le sens inverse du mouvement imposé de rotation de la tête).", value: "" },
          {title: "5 - Réflexe fronto-orbiculaire (fermeture des paupières après percussion de la glabelle).", value: ""},
        ]
      }
    ]
  },
        {
    id:11,
    name: "Masters, traumatisme crânien (Classification)",
    questions: [
      {
        title: "Gravité traumatisme crânien.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:12,
    name: "MRC, force musculaire (Echelle)",
    questions: [
      {
        title: "Cotation déficit musculaire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:13,
    name: "NIHSS (Score)",
    questions: [
      {
        title: "1a - Vigilance",
        responses: [
          { title: "0 - Vigilance normale, réactions vives.", value: "" },
          {title: "1 - Trouble léger de la vigilance : obnubilation, éveil plus ou moins adapté aux stimulations environnantes.", value: ""},
          { title: "2 - Coma ; réactions adaptées aux stimulations nociceptives.", value: "" },
          {title: "3 - Coma grave : réponse stéréotypée ou aucune réponse motrice.", value: ""},
        ]
      },
        {
        title: "1b - Orientation (mois, âge).",
        responses: [
          { title: "0 - Deux réponses exactes.", value: "" },
          {title: "1 - Une seule bonne réponse.", value: ""},
          {title: "2 - Pas de bonne réponse.", value: ""},
        ]
      },
        {
        title: "1c - Commandes (ouverture des yeux, ouverture du poing)",
        responses: [
          {title: "0 - Deux ordres effectués.", value: ""},
          { title: "1 - Un seul ordre effectué.", value: "" },
          {title: "2 - Aucun ordre effectué.", value: ""},
        ]
      },{
        title: "2 - Oculumotricité.",
        responses: [
          { title: "0 - Oculomotricité normale.", value: "" },
          { title: "1 - Ophtalmoplégie partielle ou déviation réductible du regard.", value: "" },
          { title: "2 - Ophtalmoplégie horizontale complète ou déviation forcée du regard.", value: "" },
        ]
      },{
        title: "3 - Champ visuel.",
        responses: [
          { title: "0 - Champ visuel normal.", value: "" },
          {title: "1 - Quadranopsie latérale homonyme ou hémianopsie incomplète ou négligence visuelle unilatérale.", value: ""},
          { title: "2 - Hémianopsie latérale homonyme franche.", value: "" },
          { title: "3 - Cécité bilatérale ou coma (1a = 3).", value: "" },
          
        ]
      },{
        title: "4 - Paralysie faciale",
        responses: [

          { title: "0 - Motricité faciale normale.", value: "" },
          {title: "1 - Asymétrie faciale modérée (PF unilatérale incomplète).", value: ""},
          { title: "2 - Paralysie faciale unilatérale centrale franche.", value: "" },
          { title: "3 - Paralysie faciale périphérique ou diplégie faciale.", value: "" },        ]
      },{
        title: "5d - Motricité membre supérieur droit",
        responses: [
          
          { title: "0 - Pas de déficit moteur proximal.", value: "" },
          {title: "1 - Affaissement dans les 10 secondes, mais sans atteindre le plan du lit.", value: ""},
          { title: "2 - Effort contre la pesanteur, mais chute dans les 10 sec sur le plan du lit.", value: "" },
          {title: "3 - Pas d’effort contre la pesanteur mais présence d’une contraction musculaire.", value: ""},
          { title: "4 - Absence de mouvement (aucune contraction volontaire).", value: "" },
          { title: "9 - Cotation impossible (amputation, arthrodèse).", value: "" },        ]
      },{
        title: "5g - Motricité membre supérieur gauche",
        responses: [
          {title: "0 - Pas de déficit moteur proximal.", value: ""},
          {title: "1 - Affaissement dans les 10 secondes, mais sans atteindre le plan du lit.", value: ""},
          { title: "2 - Effort contre la pesanteur, mais chute dans les 10 sec sur le plan du lit.", value: "" },
          {title: "3 - Pas d’effort contre la pesanteur mais présence d’une contraction musculaire.", value: ""},
          { title: "4 - Absence de mouvement (aucune contraction volontaire).", value: "" },
          { title: "9 - Cotation impossible (amputation, arthrodèse).", value: "" },
        ]
      },{
        title: "6d - Motricité membre inférieur droit",
        responses: [
          { title: "0 - Pas de déficit moteur proximal.", value: "" },
          { title: "1 - Affaissement dans les 5 secondes, mais sans atteindre le plan du lit.", value: "" },
          {title: "2 - Effort contre la pesanteur, mais chute dans les 5 sec sur le plan du lit.", value: ""},
           {title: "3 - Pas d’effort contre la pesanteur mais présence d’une contraction musculaire (flexion hanche, adduction..).", value: ""},
            {title: "4 - Absence de mouvement (aucune contraction volontaire).", value: ""},
            {title: "9 - Cotation impossible (amputation, arthrodèse).", value: ""},


        ]
      },{
        title: "6g - Motricité membre inférieur gauche",
        responses: [
          { title: "0 - Pas de déficit moteur proximal.", value: "" },
          { title: "1 - Affaissement dans les 5 secondes, mais sans atteindre le plan du lit.", value: "" },
          { title: "2 - Effort contre la pesanteur, mais chute dans les 5 sec sur le plan du lit.", value: "" },
          { title: "3 - Pas d’effort contre la pesanteur mais présence d’une contraction musculaire (flexion hanche, adduction..).", value: "" },
          { title: "4 - Absence de mouvement (aucune contraction volontaire).", value: "" },
          {title: "9 - Cotation impossible (amputation, arthrodèse).", value: ""},
        ]
      },{
        title: "7 - Ataxie",
        responses: [
          { title: "0 - Pas d’ataxie.", value: "" },
           {title: "1 - Ataxie pour un membre.", value: ""},
            {title: "2 - Ataxie pour 2 membres ou plus.", value: ""},
        ]
      },{
        title: "8 - Sensibilité",
        responses: [
          { title: "0 - Sensibilité normale.", value: "" },
          {title: "1 - Hypoesthésie minime a modérée.", value: ""},
          {title: "2 - Hypoesthésie sévère ou anesthésie.", value: ""},
        ]
      },{
        title: "9 - Langage",
        responses: [
          { title: "0 - Pas d’aphasie.", value: "" },
          {title: "1 - Aphasie discrète à modérée : communication informative.", value: ""},
          { title: "2 - Aphasie sévère.", value: "" },
          {title: "3 - Mutisme ; aphasie totale.", value: ""},
        ]
      },{
        title: "10 - Dysarthrie.",
        responses: [
          { title: "0 - Pas de dysarthrie.", value: "" },
          { title: "1 - Dysarthrie discrète à modérée.", value: "" },
          {title: "2 - Dysarthrie sévère.", value: ""},
          {title: "9 - Cotation impossible (patient intubé ou autre barrière physique, préciser la raison dans le dossier).", value: ""},
        ]
      },{
        title: "11 - Extinction, négligence",
        responses: [
          { title: "0 - Pas d’extinction ni négligence.", value: "" },
          { title: "1 - Extinction dans une seule modalité, visuelle ou sensitive, ou négligence partielle auditive, spatiale ou personnelle.", value: "" },
          
          { title: "2 - Négligence sévère ou anosognosie ou extinction portant sur plus d’une modalité sensorielle.", value: "" },   
        ]
      }
    ]
  },
        {
    id:14,
    name: "PDQ-39, Parkinson (Questionnaire)",
    questions: [
      {
        title: "1. Avez-vous eu des difficultés dans la pratique de vos loisirs ?",
        responses: [
          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" },
        ]
      },
       {
        title: "2. Avez-vous eu des difficultés à vous occuper de votre maison : ménage, cuisine, bricolage, …",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }        ]
      },
        {
        title: "3. Avez-vous eu des difficultés à porter des sacs de provisions ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },
         {
        title: "4. Avez-vous eu des problèmes pour faire 1 km à pied ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "5. Avez-vous eu des problèmes pour faire 100 m à pied ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "6. Avez-vous eu des problèmes à vous déplacer chez vous, aussi aisément que vous l'auriez souhaité ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "7. Avez-vous eu des problèmes à vous déplacer dans les lieux publics ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "8. Avez-vous eu besoin de quelqu'un pour vous accompagner quand vous sortez ?        ",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "9. Avez-vous eu peur ou avez-vous été inquiet à l'idée de tomber en public ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "10. Avez-vous été confiné(e) chez vous plus que vous ne l'auriez souhaité ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },      {
        title: "11. Avez-vous eu des difficultés pour vous laver ?",
        responses: [
          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" },
        ]
      },
       {
        title: "12. Avez-vous eu des difficultés pour vous habiller ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }        ]
      },
        {
        title: "13. Avez-vous eu des difficultés pour boutonner vos vêtements ou pour lacer vos chaussures ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },
         {
        title: "14. Avez-vous eu des difficultés pour écrire lisiblement ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "15. Avez-vous eu des difficultés pour couper la nourriture ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "16. Avez-vous eu des difficultés pour tenir un verre sans le renverser ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "17. Vous êtes-vous senti(e) déprimé(e) ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "18. Vous êtes-vous senti(e) isolé(e) et seul(e) ?        ",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "19. Vous êtes-vous senti(e) au bord des larmes ou avez-vous pleuré ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "20. Avez-vous ressenti de la colère ou de l'amertume ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },      {
        title: "21. Vous êtes vous-senti(e) anxieux(se) ?",
        responses: [
          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" },
        ]
      },
       {
        title: "22. Vous êtes-vous senti(e) inquiet(e) pour votre avenir ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }        ]
      },
        {
        title: "23. Avez-vous ressenti le besoin de dissimuler aux autres votre maladie de Parkinson ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },
         {
        title: "24. Avez-vous évité des situations où vous deviez manger ou boire en public ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "25. Vous êtes-vous senti(e) gêné(e) en public à cause de votre maladie de Parkinson ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "26. Vous êtes vous-senti(e) inquiet(e) des réactions des autres à votre égard ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "27. Avez-vous eu des problèmes dans vos relations avec vos proches ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "28. Avez-vous manqué du soutien dont vous aviez besoin, de la part de votre époux(se) ou conjoint(e) ?      ",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "29. Avez-vous manqué du soutien dont vous aviez besoin, de la part de votre famille ou de vos ami(e)s proches ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "30. Vous êtes-vous endormi(e) dans la journée d'une façon inattendue ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },
            {
        title: "31. Avez-vous eu des problèmes de concentration, par exemple en lisant ou en regardant la télévision ?",
        responses: [
          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" },
        ]
      },
       {
        title: "32. Avez-vous senti que votre mémoire était mauvaise ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }        ]
      },
        {
        title: "33. Avez-vous fait de mauvais rêves ou eu des hallucinations ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      },
         {
        title: "34. Avez-vous des difficultés pour parler ? ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "35. Vous êtes-vous senti(e) incapable de communiquer normalement avec les autres ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "36. Vous êtes-vous senti(e) ignoré(e) par les autres ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "37. Avez-vous eu des crampes ou spasmes musculaires douloureux ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "38. Avez-vous eu mal ou avez-vous eu des douleurs dans les articulations ou dans le corps ?       ",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
      }
, {
        title: "39. Avez-vous eu la sensation désagréable de chaud ou de froid ?",
        responses: [

          { title: "0 - Jamais.", value: "" },
          {title: "1 - Rarement.", value: ""},
          {title: "2 - Parfois.", value: ""},
          {title: "3 - Souvent.", value: ""},
          {title: "4 - Toujours, ou ne peut jamais faire.", value: ""},
          { title: "X - Je ne peux/souhaite pas répondre à cette question.", value: "" }         ]
}
      
    ]
  },
        {
    id:15,
    name: "Rankin modifiée (Echelle)",
    questions: [
      {
        title: "Evaluation globale du handicap.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

  },

  
  {
    id:16,
      name: "Nutrition",
      image: "/assets/img/nutrition.svg",
      diseasesLink: "/specialities/nutrition",
      diseases:[
        {
    id: 1,
    name: "Albuminémie corrigée selon CRP",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Body Mass Index (BMI)",
    questions: [
      {
        title: "Ou IMC, évaluation surpoids.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Dépense et besoin énergétique",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "EBS, comportement alimentaire (Echelle)",
    questions: [
      {
        title: "1 - Débuter son repas",
        responses: [
          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },
        ]
      },
      {
        title: "2 - Maintenir son attention",
        responses: [
          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },        ]
      },
      {
        title: "3 - Localiser tout son repas",
        responses: [

          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },        ]
      },
      {
        title: "4 - Utiliser des couverts.",
        responses: [

          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },        ]
      },
      {
        title: "5 - Avaler, mâcher et déglutir sans toux",
        responses: [

          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },        ]
      },
      {
        title: "6 - Terminer son repas",
        responses: [

          { title: "Indépendant", value: "" },
          { title: " Avec stimulation verbale", value: "" },
          { title: "Avec assistance physique", value: "" },
          { title: "Dépendant", value: "" },        ]
      },
    ]
  },
        {
    id:5,
    name: "Index Masse Corporelle (IMC)",
    questions: [
      {
        title: "Ou BMI, évaluation surpoids.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "LDL-Cholestérol (Friedewald)",
    questions: [
      {
        title: "Calcul LDL-Cholestérol.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:7,
    name: "Masse grasse par plis cutanés (Durnin-Wormseley)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:8,
    name: "Masse Maigre",
    questions: [
      {
        title: "Calcul de la masse, ou poids, maigre selon poids et taille.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:9,
    name: "MNA (Scores)",
    questions: [
      {
        title: "A) Le patient présente-t-il une perte d’appétit ? A-t-il moins mangé ces 3 derniers mois par manque d’appétit, problèmes digestifs, difficultés de mastication ou de déglutition ?",
        responses: [
          { title: "0 - Baisse sévère des prises alimentaires.", value: "" },
          {title: "1 - Légère baisse des prises alimentaires.", value: ""},
          {title: "2 - Pas de baisse des prises alimentaires.", value: ""},
        ]
      },
      {
        title: "B) Perte récente de poids (<3 mois).",
        responses: [
          { title: "0 - Perte de poids > 3 kg.", value: "" },
          
          { title: "1 - Ne sait pas.", value: "" },
          {title: "2 - Perte de poids entre 1 et 3 kg.", value: ""},
          {title: "3 - Pas de perte de poids.", value: ""},
        ]
      },
      {
        title: "C) Motricité.",
        responses: [
          { title: "0 - Au lit ou au fauteuil.", value: "" },
          
          { title: "1 - Autonome à l'intérieur.", value: "" },
          {title: "2 - Sort du domicile.", value: ""},
        ]
      },
      {
        title: "D) Maladie aiguë ou stress psychologique au cours des 3 derniers mois ?",
        responses: [
          { title: "0- Oui", value: "" },
          
          { title: "2 - Non", value: "" },
          
        ]
      },
      {
        title: "E) Problèmes neuropsychologiques.",
        responses: [
          { title: "0 - Démence ou dépression sévère.", value: "" },
          
          { title: "1 - Démence légère.", value: "" },
          {title: "2 - Pas de problème psychologique.", value: ""},
        ]
      },
      {
        title: "F) Indice de masse corporelle (IMC).",
        responses: [
          { title: "0 - IMC < 19.", value: "" },
          
          { title: "1 - 19 ≤ IMC < 21.", value: "" },
          {title: "2 - 21 ≤ IMC < 23.", value: ""},
          {title: "3 - IMC ≥ 23.", value: ""},
        ]
      },
      {
        title: "G) Le patient vit-il de façon indépendante à domicile ?",
        responses: [
          { title: "0 - Non", value: "" }, 
          { title: "1 - Oui", value: "" },
        
        ]
      },
      {
        title: "H) Prend plus de 3 médicaments par jour ?",
        responses: [
          { title: "0 - Oui", value: "" },
          
          { title: "1 - Non", value: "" },
       
        ]
      },
      {
        title: "I) Escarres ou plaies cutanées ?",
        responses: [
          { title: "0 - Oui", value: "" },
          
          { title: "1 - Non", value: "" },
        ]
      },
      {
        title: "J) Combien de véritables repas le patient prend-il par jour ?",
        responses: [
          {title: "0 - 1 repas.", value: ""},  
          { title: "1 - 2 repas.", value: "" },
          {title: "2 - 3 repas.", value: ""},
        ]
      },
      {
        title: "K) Consomme-t-il au moins deux fois par jour des fruits ou des légumes ?",
        responses: [
          { title: "0 - Oui", value: "" },
          
          { title: "1 - Non", value: "" },
        ]
      },
      {
        title: "L) Quelle quantité de boissons consomme-t-il par jour (eau, jus, café, thé, lait...) ?",
        responses: [
          { title: "0 - Moins de 3 verres.", value: "" },
          
          { title: "½ - De 3 à 5 verres.", value: "" },
          {title: "1 - Plus de 5 verres.", value: ""},
        ]
      },
      {
        title: "M) Manière de se nourrir.",
        responses: [
          { title: "0 - Nécessite une assistance.", value: "" },
          { title: "1 - Se nourrit seul avec difficulté.", value: "" },
          {title: "2 - Se nourrit seul sans difficulté.", value: ""},
        ]
      },
      {
        title: "N) Le patient se considère-t-il bien nourri ?",
        responses: [
          { title: "0 - Se considère comme dénutri.", value: "" },
          
          { title: "1 - N'est pas certain de son état nutritionnel.", value: "" },
          {title: "2 - Se considère comme n’ayant pas de problème de nutrition.", value: ""},
        ]
      },
      {
        title: "O) Le patient se sent-il en meilleure ou en moins bonne santé que la plupart des personnes de son âge ?",
        responses: [
          { title: "0 - Moins bonne.", value: "" },
          
          { title: "½ - Ne sait pas.", value: "" },
          {title: "1 - Aussi bonne.", value: ""},
          {title: "2 - Meilleure.", value: ""},
        ]
      },
      {
        title: "P) Circonférence Brachiale (CB en cm).",
        responses: [
          {title: "0 - CB < 21 cm.", value: ""},
          { title: "½ - 21 cm ≤ CB ≤ 22 cm.", value: "" },
          {title: "1 - CB > 22 cm.", value: ""},
        ]
      },
      {
        title: "Q) Circonférence du Mollet (CM en cm).",
        responses: [
          { title: "0 - CM < 31 cm.", value: "" },
          
          { title: "1 - CM ≥ 31 cm.", value: "" },

        ]
      },
      
      
    ]
  },
        {
    id:10,
    name: "NICE, renutrition inappropriée (Critères)",
    questions: [
      {
        title: "Critéres majeurs",
        responses: [
        ]
      },
      {
        title: "Critéres mineurs",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:11,
    name: "NRS 2002 (Score)",
    questions: [
      {
        title: "Index de Masse Corporelle (BMI) < 20.5.",
        responses: [
          { title: "Non", value: "" },
          { title :"Oui" , value:""}
        ]
      },
       {
        title: "Le patient a-t-il perdu du poids pendant les 3 derniers mois ?",
        responses: [

          { title: "Non", value: "" },
          { title :"Oui" , value:""}        ]
      },
        {
        title: "Le patient a-t-il réduit ses apports alimentaires les 3 derniers mois ?",
        responses: [

          { title: "Non", value: "" },
          { title :"Oui" , value:""}        ]
      },
         {
        title: "Le patient a-t-il une maladie induisant un stress métabolique ?",
        responses: [

          { title: "Non", value: "" },
          { title :"Oui" , value:""}        ]
      }
    ]
  },
        {
    id:12,
    name: "Poids IBW, ABW...",
    questions: [
      {
        title: "Poids idéal et ajusté.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    ide:13,
    name: "Poids idéal théorique",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
    id:17,
      name: "Oncologie",
      image: "/assets/img/oncologie.svg",
      diseasesLink: "/specialities/oncologie",
      diseases:[
        {
    id:1,
    name: "ECOG de Zubrod (Echelle)",
    questions: [
      {
        title: "Etat de santé global.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 2,
    name: "Eisinger (Score)",
    questions: [
      {
        title: "Branche Maternelle",
        responses: [
          { title: "5 - Mutation BRCA1 ou 2 identifiée dans la famille.", value: "" }   ,  
          { title: "4 - Cancer du sein chez une femme < 30 ans.", value: "" },
          {title: "3 - Cancer du sein chez une femme entre 30 et 39 ans.", value: ""},
          {title: "2 - Cancer du sein chez une femme 40 et 49 ans.", value: ""},

          {title: "1 - Cancer du sein chez une femme 50 et 70 ans.", value: ""},
          {title: "4 - Cancer du sein chez un homme.", value: ""},
          {title: "3 - Cancer de l’ovaire.", value: ""},

        ]
      },
         {
        title: "Branche Paternelle",
        responses: [
          { title: "5 - Mutation BRCA1 ou 2 identifiée dans la famille.", value: "" }   ,  
          { title: "4 - Cancer du sein chez une femme < 30 ans.", value: "" },
          {title: "3 - Cancer du sein chez une femme entre 30 et 39 ans.", value: ""},
          {title: "2 - Cancer du sein chez une femme 40 et 49 ans.", value: ""},

          {title: "1 - Cancer du sein chez une femme 50 et 70 ans.", value: ""},
          {title: "4 - Cancer du sein chez un homme.", value: ""},
          {title: "3 - Cancer de l’ovaire.", value: ""},
        ]
      }
   
    ]
  },
        {
    id:3,
    name: "G8 (Questionnaire)",
    questions: [
      {
        title: "Perte d'appétit",
        responses: [
          {title: "0 - Anorexie sévère.", value: ""},
           {title: "1 - Anorexie modérée.", value: ""},
            {title: "2 - Pas d'anorexie.", value: ""},
        ]
      },
      {
        title: "Perte récente de poids (< 3 mois)",
        responses: [
          { title: "0 - Perte de poids > 3 kg.", value: "" },
           {title: "1 - Ne sait pas.", value: ""},
            {title: "2 - Perte de poids entre 1 et 3 kg.", value: ""},
             {title: "3 - Pas de perte de poids.", value: ""},
        ]
      },
      {
        title: "Motricité",
        responses: [
          { title: "0 - Du lit au fauteuil.", value: "" },
           {title: "1 - Autonome à l’intérieur.", value: ""},
            {title: "2 - Sort du domicile.", value: ""},
        ]
      },
      {
        title: "Troubles neuro-psychiatriques.",
        responses: [
          { title: "0 - Démence ou dépression sévère.", value: "" },
           {title: "1 - Démence ou dépression modérée.", value: ""},
            {title: "2 - Pas de trouble psychiatrique.", value: ""},
        ]
      },
      {
        title: "Indice de masse corporelle",
        responses: [
          { title: "0 - IMC < 19.", value: "" },
          { title: "1 - 19 ≤ IMC < 21.", value: "" },
          { title: "2 - 21 ≤ IMC < 23.", value: "" },
         {title: "3 - IMC ≥ 23.", value: ""},

        ]
      },
      {
        title: "Prend plus de 3 médicaments",
        responses: [
          { title: "0 - Oui", value: "" },
           {title: "1 - Non", value: ""},
        ]
      },
      {
        title: "Ressenti",
        responses: [
          { title: "0 - Moins bonne.", value: "" },
           {title: "½ - Ne sait pas.", value: ""},
            {title: "1 - Aussi bonne.", value: ""},
             {title: "2 - Meilleure", value: ""},
        ]
      },
      {
        title: "Age",
        responses: [
          { title: "0 - Age > 85 ans.", value: "" },
           {title: "1 - Age entre 80 et 85 ans.", value: ""},
            {title: "2 - Age < 80 ans.", value: ""},
        ]
      },
    ]
  },
        {
    id:4,
    name: "Karnofsky (Echelle)",
    questions: [
      {
        title: "Etat de santé avant chimiothérapie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:5,
    name: "Khorana M.T.E.V. (Score)",
    questions: [
      {
        title: "Site du cancer:",
        responses: [
          { title: "2 - Estomac, Pancréas", value: "" },
          {title: "1 - Poumon, Lymphome, Cancer Gynécologique, Vessie, Testicule.", value: ""},
        ]
      },
       {
        title: "Autres items",
        responses: [
          { title: "1 - Taux de plaquettes pré-chimiothérapie ≥ 350.000/mm³.", value: "" },
          { title: "1 - Hémoglobine < 10 g/dl ou utilisation d'érythropoïetine.", value: "" },
          {title: "1 - Taux de leucocytes pré-chimiothérapie > 11.000/mm³.", value: ""},
          {title: "1 - BMI (IMC) ≥ 35 kg/m².", value: ""},
        ]
      }
    ]
  },
        {
    id:6,
    name: "Landry (Echelle)",
    questions: [
      {
        title: "Etat de santé global pédiatrique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:7,
    name: "MASCC (Score)",
    questions: [
      {
        title: "Critéres d'exclusion de risque",
        responses: [
          { title: "Neutropénie fébrile sans ou avec très peu de symptômes.", value: "" },
          { title: "Neutropénie fébrile avec symptômes modérés.", value: "" },
          { title: "Pas d'hypotension (pression systolique > 90 mm Hg).", value: "" },
          { title: "Pas de maladie pulmonaire chronique obstructive (BPCO, emphysème...).", value: "" },
          { title: "Tumeur solide ou tumeur hématologique sans infection fongique préalable.", value: "" },
          { title: "Pas de déshydratation nécessitant une perfusion.", value: "" },
          { title: "Patient venant consulter (non hospitalisé, infection communautaire).", value: "" },
          { title: " Age < 60 ans", value: "" },
  
        ]
      }
    ]
  },
  {
   id:8,
    name: "Surface corporelle",
    questions: [
      {
        title: "Calcul surface corporelle.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Surface corporelle (pédiatrique)",
    questions: [
      {
        title: "Calcul surface corporelle.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:10,
    name: "T.N.M. (Classifications)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

  },
  
  {
    id: 18,
      name: "O.R.L",
      image: "/assets/img/orl.svg",
      diseasesLink: "/specialities/orl",
      diseases:[
        {
    id:1,
    name: "Berlin, SAS (Questionnaire)",
    questions: [
      {
        title: "1) Ronflez-vous ?",
        responses: [
          { title: "Oui", value: "" },
           {title: "Non", value: ""},
            {title: "Je ne sais pas", value: ""},
        ]
      },
        {
        title: "2) Votre ronflement est-il ?",
        responses: [
          { title: "Légérement plus bruyant que votre respiration.", value: "" },
           {title: "Aussi bruyant que votre voix lorsque vous parlez.", value: ""},
            {title: "Plus bruyant que votre voix lorsque vous parlez.", value: ""},
             {title: "Très bruyant, on vous entend dans les chambres voisines.", value: ""},
        ]
      },
          {
        title: "3) Combien de fois ronflez-vous ?",
        responses: [
          { title: "Presque toutes les nuits.", value: "" },
          {title: "3 à 4 nuits par semaine.", value: ""},
          {title: "1 à 2 nuits par semaine.", value: ""},
          {title: "1 à 2 nuits par mois.", value: ""},
        ]
      },
            {
        title: "4) Votre ronflement a-t-il déjà dérangé quelqu'un d'autre ?",
        responses: [
          { title: "Oui", value: "" },
          {title: "Non", value: ""}
        ]
      },
              {
        title: "5) A-t-on déjà remarqué que vous cessiez de respirer durant votre sommeil ?",
        responses: [
          { title: "Presque tous les matins.", value: "" },
          {title: "3 à 4 matins par semaine.", value: ""},
          {title: "1 à 2 matins par semaine.", value: ""},
          {title: "1 à 2 matins par mois.", value: ""},
          {title: "Jamais ou presque jamais.", value: ""},
        ]
      },
                {
        title: "6) Combien de fois vous arrive-t-il de vous sentir fatigué ou las après votre nuit de sommeil ?",
        responses: [
         
          { title: "Presque tous les matins.", value: "" },
          {title: "3 à 4 matins par semaine.", value: ""},
          {title: "1 à 2 matins par semaine.", value: ""},
          {title: "1 à 2 matins par mois.", value: ""},
          {title: "Jamais ou presque jamais.", value: ""},]
      },
                  {
      title: "7) Vous sentez-vous fatigué, las ou peu en forme durant votre période d'éveil ?",
        responses: [

          { title: "Presque tous les matins.", value: "" },
          {title: "3 à 4 matins par semaine.", value: ""},
          {title: "1 à 2 matins par semaine.", value: ""},
          {title: "1 à 2 matins par mois.", value: ""},
          {title: "Jamais ou presque jamais.", value: ""},        ]
      },
                    {
        title: "8) Vous est-il arrivé de vous assoupir ou de vous endormir au volant de votre véhicule ?",
        responses: [
          { title: " Oui", value: "" },
           {title: "Non", value: ""},
        ]
      },
                      {
        title: "9) Si oui, à quelle fréquence cela vous arrive-t-il ?",
        responses: [

          { title: "Presque tous les matins.", value: "" },
          {title: "3 à 4 matins par semaine.", value: ""},
          {title: "1 à 2 matins par semaine.", value: ""},
          {title: "1 à 2 matins par mois.", value: ""},
          {title: "Jamais ou presque jamais.", value: ""},         ]
      },
                        {
        title: "10) Souffrez-vous d'hypertension artérielle ?",
        responses: [
          { title: "Oui", value: "" },
          {title: "Non", value: ""},
          {title: "Je ne sais pas", value: ""},
        ]
      },
      {
        title: "11) I.M.C. ≥ 30 ?",
        responses: [
          { title: " Oui", value: "" },
          {title: "Non", value: ""},
        ]
      }
    ]
  },
        {
    id:2,
    name: "Centor modifié (Score)",
    questions: [
      {
        title: "Age",
        responses: [
          { title: "De 3 à 14 ans.", value: "" },
           {title: "De 15 à 44 ans.", value: ""},
            {title: "45 ans ou plus.", value: ""},
        ]
      },
      {
        title: "Items cliniques",
        responses: [
          { title: "Température > 38°C.", value: "" },
           {title: "Absence de toux.", value: ""},
            {title: "Adénopathies cervicales antérieures douloureuses.", value: ""},
             {title: "Augmentation de volume ou exsudat amygdalien.", value: ""},
        ]
      }
    ]
  },
        {
    id:3,
    name: "House & Brackmann (Classification)",
    questions: [
      {
        title: "Gravité paralysie faciale périphérique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Le Fort, fractures (Classification)",
    questions: [
      {
        title: "Fractures du massif facial.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:5,
    name: "Mac Isaac (Score)",
    questions: [
      {
        title: "Age",
        responses: [
          { title: "De 3 à 14 ans.", value: "" },
           {title: "De 15 à 44 ans.", value: ""},
            {title: "45 ans ou plus.", value: ""},
        ]
      },
      {
        title: "Items cliniques",
        responses: [
          { title: "Température > 38°C.", value: "" },
          { title: "Absence de toux.", value: "" },
          { title: "Adénopathies cervicales antérieures douloureuses.", value: "" },
          { title: "Augmentation de volume ou exsudat amygdalien.", value: "" },

        ]

      }

    ]
  },
        {
    id:6,
    name: "STOP-BANG (Score)",
    questions: [
      {
        title: "Ronflements",
        responses: [
          { title: " 0 - Non", value: "" },
          {title: " 1 - Oui", value: ""}

        ]
      },{
        title: "Fatigue",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "Obsérvation",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "Hypertension",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "I.M.C. supérieur à 35 kg/m² ?",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "Age supérieur à 50 ans ?",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "Circonférence du cou > 40 cm ?",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },{
        title: "Sexe masculin ?",
        responses: [

          { title: " 0 - Non", value: "" },
          { title: " 1 - Oui", value: "" }
        ]
      },
    ]
  },
        {
          id:7,
          name: "Westley (Score)",
          questions: [
            {
              title: "Tirage intercostal",
              responses: [
                { title: "0 - Aucun", value: "" },
                  { title: "1 - Léger", value: "" },
                    { title: "2 - Modéré", value: "" },
                      { title: "3 - Sévére", value: "" },
              ]
            },
            {
              title: "Stridor",
              responses: [
                { title: "0 -Aucun", value: "" },
                  { title: "1 - SI agitation ou audiblz au stéthoscope au repos", value: "" },
                    { title: " 2 - Au repos , sans stéthoscope", value: "" },
                    
              ]
            },
              {
        title: "Cyanose",
        responses: [
          { title: "0 - Aucune", value: "" },
            { title: "4 - Si agitation", value: "" },
              { title: "5 - AU repos", value: "" },
        ]
            },
                {
        title: "Niveau de conscience",
        responses: [
          { title: "0 - Normal", value: "" },
            { title: "5 - Désorienté", value: "" },
        ]
            },
                  {
        title: "Flux d'air",
        responses: [
          { title: "0 - Normal", value: "" },
          { title: "1 - Diminué", value: "" },
          { title: "2 - Fortement diminué ou absent", value: "" },
        ]
      }
    ]
  }
]

    },
  {
    id:19,
      name: "Orthopédie",
      image: "/assets/img/orthopédie.svg",
      diseasesLink: "/specialities/orthopédie",
      diseases: [
        {
    id:1,
    name: "Cauchoix et Duparc (Classification)",
    questions: [
      {
        title: "Fractures ouvertes.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Garden (Classification)",
    questions: [
      {
        title: "Fractures du col du fémur.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Gustilo et Anderson (Classification)",
    questions: [
      {
        title: "Fractures ouvertes.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "ISIS (Score)",
    questions: [
      {
        title: "Age lors intervention",
        responses: [
          {title: "2 - Age ≥ 20 ans.", value: ""},
                    {title: "0 - Age > 20 ans.", value: ""}

        ]
      },
      {
        title: "Degré de participation sportive",
        responses: [
          { title: "2 - Compétition.", value: "" },
           {title: "0 - Récréatif ou aucun.", value: ""}

        ]
      },{
        title: "Type de sport pré-opératoire",
        responses: [
          { title: "1 - Sport de contact ou à bras armé-forcé.", value: "" },
          {title: " 0 - Autre", value: ""}

        ]
      },{
        title: "Hyperlaxité de l'épaule",
        responses: [
          { title:  " 1 - Hyperlaxité de l'épaule (antérieure ou inférieure)", value: "" },
         {title: " 0 - Laxité normale", value: ""}

        ]
      },{
        title: "Encoche sur radiographie",
        responses: [
          { title: "2 - Visible en rotation latérale", value: "" },
          {title: " 0 - Invisible en rotation latérale", value: ""}

        ]
      },{
        title: "Perte de contour radiologique de l'os sous-chondral",
        responses: [
          { title: "2 - Perte du contour", value: "" },
         {title: "0 - Pas de lésion ", value: ""}

        ]
      },
    ]
  },
        {
    id:5,
    name: "Lagrange et Rigault (Classification)",
    questions: [
      {
        title: "Classification fractures supra-condyliennes de l'humérus.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:6,
          name: "Lequesne, Genou (Indice)",
          questions: [
            {
              title: "Nocturne",
              responses: [
                { title: "0 - Aucune", value: "" },
                { title: "1 - Seulement aux mouvements et dans certaines postures.", value: "" },
                { title: "2 - Même immobile, sans bouger.", value: "" },
              ]
            },
            {
              title: "Dérouillage matinal",
              responses: [
                { title: "0 - Aucun ou inférieur à 1 minute.", value: "" },
                { title: "1 - Entre une et 15 minutes.", value: "" },
                { title: "2 - Plus d'un quart d'heure.", value: "" },
              ]
            },
            {
              title: "Rester debout ou piétiner sur place 1/2 heure augmente-t-il la douleur ?",
              responses: [
                { title: "0 - Non", value: "" },
                { title: " 1 - Oui", value: "" },
              ]
            }
            ,
            {
              title: "Douleur à la marche",
              responses: [
                { title: "0 - Non.", value: "" },
                { title: "1 - Seulement après quelque distance.", value: "" },
                { title: "2 - Dès le début de la marche et de façon croissante.", value: "" },
              ]
            }
            ,
            {
              title: "Pouvez-vous vous relever d'un siège sans l'aide des bras ?",
              responses: [
                { title: "0 - Non", value: "" },
                { title: " 1 - Oui", value: "" },
              ]
            },
            {
              title: "Périmètre (quelle que soit la douleur)",
              responses: [
                { title: "0 - Illimité.", value: "" },
                { title: "1 - Limité mais supérieur à 1 km.", value: "" },
             { title: " 2 - Environ 1 km (environ 15 minutes).", value: "" },
                { title: "3 - 500 à 900 mètres (environ 8 à 15 minutes).", value: "" },
                { title: " 4 - 300 à 500 mètres.", value: "" },
                { title: "5 - 100 à 300 mètres.", value: "" },

              ]
            },
               {
        title: "Aides nécessaires",
        responses: [
          { title: "+0 - Aucune canne ou béquille nécessaire.", value: "" },
          { title: " +1 - Une canne ou une béquille est nécessaire.", value: "" },
          {title: "+2 - Deux cannes ou deux béquilles sont nécessaires.", value: ""},

        ]
            },
                  {
        title: "Pouvez-vous monter un étage ?",
        responses: [
          { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},

        ]
            },
                {
        title: "Pouvez-vous déscendre un étage ?",
        responses: [
          { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},

        ]
            },
                     {
        title: "Pouvez-vous vous accroupir ou rester à genoux ?",
        responses: [
          { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},
        ]
      },
         {
        title: "Pouvez-vous marcher en terrain irrégulier ?",
        responses: [
          { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},
        ]
      }
    ]
  },
        {
    id:7,
    name: "Lequesne, Hanche (Indice)",
    questions: [
      {
        title: "Nocturne",
        responses: [
          { title: "0 - Aucune ", value: "" },
          { title: "1 - Seulement aux mouvements et dans certains postures", value: "" },
          {title: "2 - Plus d'un quart d'heure", value: ""},
        ]
      },
      {
        title: "Dérouillage matinal",
        responses: [
          { title: "0 - Aucun ou inférieur à 1 minute.", value: "" },
          {title: "1 - Entre une et 15 minutes.", value: ""},
          {title: "2 - Plus d'un quart d'heure.", value: ""}

        ]
      },
      {
        title: "Rester debout ou piétiner sur place 1/2 heure augmente-t-il la douleur ?",
        responses: [
          { title: "0 - Non", value: "" },
          {title: " 1 - Oui", value: ""}

        ]
      },
      {
        title: "Douleur à la marche",
        responses: [
          { title: "0 - Non", value: "" },
          { title: "1 - Seulement aprés quelque distance ", value: "" },
          {title: "2 - Dés le début de la marche et de façon croissante", value: ""}


        ]
      },
      {
        title: "Souffrez-vous à la station assise prolongée (2 heures) avant de vous relever ?",
        responses: [
          { title: "0 - Non", value: "" },
           {title: "1 - Oui", value: ""}

        ]
      },
      {
        title: "Périmètre (quelle que soit la douleur)",
        responses: [
          { title: "0 - Illimité.", value: "" },
          { title: "1 - Limité mais supérieur à 1 km.", value: "" },
          { title: "2 - Environ 1 km (environ 15 minutes).", value: "" },
          { title: "3 - 500 à 900 mètres (environ 8 à 15 minutes).", value: "" },
          { title: "4 - 300 à 500 mètres.", value: "" },
          { title: "5 - 100 à 300 mètres.", value: "" },

          
        ]
      },
      {
        title: "Aides nécessaires",
        responses: [
          { title: "+0 - Aucune canne ou béquille nécessaire.", value: "" },
          {title: "+1 - Une canne ou une béquille est nécessaire.", value: ""},
         {title: "+2 - Deux cannes ou deux béquilles sont nécessaires.", value: ""},

        ]
      },
      {
        title: "Pouvez-vous monter ou descendre un étage ?",
        responses: [
  { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},        ]
      },
      {
        title: "Pouvez-vous enfiler vos chaussettes par devant ?",
        responses: [
  { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},        ]
      },
      {
        title: "Pouvez-vous ramasser un objet par terre ?",
        responses: [
  { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},        ]
      },
      {
        title: "Pouvez-vous sortir d'une voiture, d'un fauteuil profond ?",
        responses: [
  { title: "0.0 - Sans difficulté.", value: "" },
          { title: " 0.5 - Assez facilement.", value: "" },
           {title: " 1.0 - Avec difficulté.", value: ""},
           {title: "1.5 - Avec beaucoup de difficulté.", value: ""},
          {title: " 2.0 - Impossible.", value: ""},        ]
      },
    ]
  },
        {
    id:8,
    name: "Ottawa, Cheville (Critères)",
    questions: [
      {
        title: "Non indication radio cheville.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Salter et Harris (Classification)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
    id:20,
      name: "Pédiatrie",
      image: "/assets/img/pediatrie.svg",
      diseasesLink: "/specialities/pediatrie",
      diseases: [
        {
    id:1,
    name: "Age corrigé",
    questions: [
      {
        title: "Age d'un prématuré.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Apgar (Score)",
    questions: [
      {
        title: "Battements cardiaques",
        responses: [
          { title: "0 - Absents.", value: "" },
          { title: "1 - Inférieurs à 100 / min.", value: "" },
          {title: "2 - Supérieurs à 100 / mn.", value: ""},
        ]
      },
      {
        title: "Respiration",
        responses: [

          { title: "0 - Absente.", value: "" },
          { title: "1 - Quelques mouvements spontanés.", value: "" },
            {title: "2 - Normale.", value: ""},        ]
      },
      {
        title: "Tonus musculaire",
        responses: [

          { title: "0 - Hypotonie globale.", value: "" },
          { title: "1 - Flexion des membres.", value: "" },
            {title: "2 - Mouvements actifs spontanés.", value: ""},        ]
      },
      {
        title: "Coloration",
        responses: [

          { title: "0 - Cyanosé, gris.", value: "" },
          { title: "1 - Cyanose des extrémités.", value: "" },
            {title: "2 - Rose.", value: ""},        ]
      },
      {
        title: "Réactivité à la stumilation",
        responses: [

          { title: "0 - Aucun.", value: "" },
          { title: "1 - Grimaces.", value: "" },
            {title: "2 - Vive.", value: ""}        ]
      },
    ]
  },
        {
    id:3,
    name: "Blantyre (Score)",
    questions: [
      {
        title: "Meilleure réponse motrice",
        responses: [
          { title: "2 - Localisation du stimulus douloureux.", value: "" },
          { title: "1 - Retrait du membre en réponse à la douleur.", value: "" },
          {title: "0 - Réponse non spécifique ou absence de réponse.", value: ""},
        ]
      },
      {
        title: "Meilleure réponse verbale",
        responses: [
          { title: "2 - Pleurs appropriés ou parle.", value: "" },
          {title: "1 - Gémissements ou pleurs inappropriés.", value: ""},
          {title: "0 - Aucune.", value: ""},
        ]
      },
      {
        title: "Mouvement des yeux",
        responses: [
          { title: "1 - Regarde ou suit du regard.", value: "" },
          { title: "0 - Ne suit pas du regard.", value: "" },
        ]
      },
    ]
  },
        {
    id:4,
    name: "Guarino (Score)",
    questions: [
      {
        title: "Apparence générale.",
        responses: [
          { title: "0 - Normale.", value: "" },
          {title: "1 - Soif, agitation ou léthargie mais irritable au toucher.", value: ""},
          {title: "2 - Somnolent, marche difficile, froid ou en sueur +/- comateux.", value: ""},
        ]
      },
       {
        title: "Yeux",
        responses: [
          { title: "0 - Normaux.", value: "" },
          {title: "1 - Légèrement creux.", value: ""},
          {title: "2 - Très creux.", value: ""},
        ]
      },
       {
        title: "Muqueuses (langue)",
        responses: [
          { title: "0 - Humides.", value: "" },
          { title: "1 - Collantes.", value: "" },
          { title: "2 - Sèches.", value: "" },
        ]
      },
        {
        title: "Déshydration sur diarrhée aiguë.",
        responses: [
          { title: "0 - Larmes", value: "" },
          { title: "1 - Diminution des larmes.", value: "" },
            {title: "2 - Pas de larmes.", value: ""},
        ]
      }
    ]
  },
        {
    id:5,
    name: "Pourcentage perte poids (nourrisson)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:6,
    name: "PRAM (Score)",
    questions: [
      {
        title: "Saturation O2",
        responses: [
          { title: "0 - ≥ 95%.", value: "" },
          { title: "1 - 92% - 94%.", value: "" },
          {title: "2 - < 92%.", value: ""}



       
        ]
      },
      {
        title: "Tirage sus-sternal",
        responses: [
          { title: "0 - Absent.", value: "" },
         {title: "2 - Présent.", value: ""}

        ]
      },
      {
        title: "Contraction des muscles scalènes",
        responses: [
          { title: "0 - Absente.", value: "" },
          {title: "2 - Présente.", value: ""}

        ]
      },
      {
        title: "Murmure vésiculaire",
        responses: [
          { title: "0 - Normal.", value: "" },
         {title: "1 - Diminué à la base.", value: ""},
         {title: "2 - Diminué à l'apex et à la base.", value: ""},  
          {title: "3 - Minimal ou absent.", value: ""},


        ]
      },
      {
        title: "Sibilances",
        responses: [

          { title: "0 - Absentes.", value: "" },
         {title: "1 - Expiratoires seulement.", value: ""},
         {title: "2 - Inspiratoires (± expiratoires).", value: ""},  
          { title: "3 - Audibles sans stéthoscope ou absentes (MV minimal ou absent).", value: "" },
        ]
      },
    ]
  },
        {
    id:7,
    name: "Rapport Bilirubine/Albumine",
    questions: [
      {
        title: "Ictère du nouveau-né.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:8,
    name: "Silverman (Score)",
    questions: [
      {
        title: "Battement des ailes du nez",
        responses: [

          { title: "0 - Absent.", value: "" },
            {title: "1 - Modéré.", value: ""},
              {title: "2 - Itense.", value: ""},        ]
      },
       {
        title: "Tirage",
        responses: [

          { title: "0 - Absent.", value: "" },
            {title: "1 - Intercostal.", value: ""},
              {title: "2 - Intercostal et sus-sternal.", value: ""},        ]
      },
        {
        title: "Geignement expiratoire",
        responses: [

          { title: "0 - Absent.", value: "" },
            {title: "1 - Audible au stéthoscope.", value: ""},
              {title: "2 - Audible à l'oreille.", value: ""},        ]
      },
         {
        title: "Entonnoir xiphoïdien",
        responses: [
          { title: "0 - Absent.", value: "" },
            {title: "1 - Modéré.", value: ""},
              {title: "2 - Intense.", value: ""},
        ]
      },
          {
        title: "Balancement thoraco-abdominal",
        responses: [

          { title: "0 - Respiration synchrone.", value: "" },
            {title: "1 - Thorax immobile.", value: ""},
              {title: "2 - Respiration paradoxale", value: ""},        ]
      }
    ]
  },
        {
          id: 9,
    name: "Taille cible",
    questions: [
      {
        title: "Estimation taille adulte d'un enfant selon tailles parents.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:10,
          name: "Wang (Score)",
          questions: [
            {
              title: "Fréquence respiratoire",
              responses: [
                { title: "0 - < 30 / minute.", value: "" },
                { title: "1 - 31 à 45 / minute.", value: "" },
                { title: "2 - 46 à 60 / minute.", value: "" },
                { title: "3 - > 60 / minute.", value: "" },
              ]
            },
            {
              title: "Wheezing",
              responses: [
                { title: "0 - Aucun.", value: "" },
                { title: "1 - Audible en fin d'expiration ou à l'auscultation.", value: "" },
                { title: "2 - Audible sur toute l'expiration ou sans stéthoscope.", value: "" },
                { title: "3 - Audible à l'inspiration et à l'expiration sans stéthoscope.", value: "" },
              ]
            },
              {
        title: "Tirage",
        responses: [
          { title: "0 - Aucun", value: "" },
          {title: "1 - Intercostal seulement.", value: ""},
          {title: "2 - Sus-sternal ou xiphoïdien.", value: ""},
          {title: "3 - Sévère avec battement des ailes du nez.", value: ""},
        ]
            },
                {
        title: "Etat générale",
        responses: [
          { title: "0 - Normal", value: "" },
          {title: "3 - Irritable, léthargique, difficultés alimentaires.", value: ""},
        ]
      }
    ]
  },
        {
          id:11,
          name: "Wood (Score)",
          questions: [
            {
              title: "Wheezing",
              responses: [
                { title: "0 - Aucun.", value: "" },
                 { title: "1 - Modéré.", value: "" },
                  { title: "2 - Marqué.", value: "" },
              ]
            },
            {
              title: "Tirage",
              responses: [

                { title: "0 - Aucun.", value: "" },
                 { title: "1 - Modéré.", value: "" },
                  { title: "2 - Sévère.", value: "" },              ]
            },
               {
        title: "Murmure vésiculaire",
        responses: [
                { title: "0 - Normal.", value: "" },
                 { title: "1 - Diminué.", value: "" },
                  { title: "2 - Très diminué.", value: "" },
        ]
            },
                  {
        title: "Cyanose",
        responses: [

                { title: "0 - Absente.", value: "" },
                 { title: "1 - En air ambiant.", value: "" },
                  { title: "2 - Sous FiO2 40%.", value: "" },        ]
            },
                     {
        title: "Consciense",
        responses: [

                { title: "0 - Normale.", value: "" },
                 { title: "1 - Somnolence ou agitation.", value: "" },
                  { title: "2 - Coma.", value: "" },        ]
      }
    ]
  }
]

    },
  {
       id:21,
      name: "Pneumologie",
      image: "/assets/img/pneumologie.svg",
      diseasesLink: "/specialities/pneumologie",
      diseases: [
        {
    id:1,
    name: "CRB[U]-65 (Scores)",
    questions: [
      {
        title: "CRB-65 et CRBU-65",
        responses: [
          { title: "Confusion.", value: "" },
           {title: "Fréquence respiratoire ≥ 30/mn.", value: ""},
            {title: "P.A. Systolique ≤ 90 mmHg ou P.A. Diastolique ≤ 60 mmHg.", value: ""},
             {title: "Age ≥ 65 ans.", value: ""},
        ]
      },{
        title: "CRBU-65 seulement :",
        responses: [
          {title: "Urémie > 7 mmol/l.", value: ""}
        ]
      }
    ]
  },
        {
          id:2,
    name: "Débit Expiratoire de Pointe (Peak-Flow) adulte",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Débit Expiratoire de Pointe (Peak-Flow) pédiatrique",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Fine (Score)",
    questions: [
      {
        title: "Age",
        responses: [
          { title: "Homme", value: "" },
                    {title: "Femme", value: ""}

        ]
      },
       {
        title: "Co-morbidités",
        responses: [
          { title: "Cancer", value: "" },
          { title: "Maladie hépatique", value: "" },
         { title: "Insuffisance cardiaque congestive", value: "" },
         {title: "Maladie vasculaire cérébrale", value: ""},
        {title: "Maladie rénale", value: ""}

        ]
      },
        {
        title: "Examen physique",
        responses: [
          { title: "Trouble des fonctions centrales", value: "" },
          { title: "Fréquence respiratoire ≥ 30/min", value: "" },
         { title: "Pression artérielle systolique < 90mmHg", value: "" },
         {title: "Température < 35°C ou ≥ 40°C", value: ""},
        {title: "Fréquence cardiaque ≥ 125/min", value: ""}
        ]
      },
         {
        title: "Examens complémentaires",
        responses: [
          { title: "pH < 7,35", value: "" },
          { title: "Urée sanguine ≥ 11mmol/l", value: "" },
         { title: "Natrémie < 130mmol/l", value: "" },
         {title: "Glycémie ≥ 14mmol/l", value: ""},
          { title: "Hématocrite < 30%", value: "" },
        {title: "PaO2 < 60mmHg ou SatO2 < 90%", value: ""},
        {title: "Épanchement pleural", value: ""},
        ]
      }
    ]
  },
        {
    id:5,
    name: "Gaz du Sang (Interprétation)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "Genève révisé (Score)",
    questions: [
      {
        title: "Probabilité embolie pulmonaire.",
        responses: [
          { title: "Age > 65 ans.", value: "" },
          {title: "Antécédent de thrombose veineuse ou d'embolie pulmonaire.", value: ""},
          {title: "Chirurgie récente ou immobilisation (moins d'un mois).", value: ""},
          {title: "Cancer évolutif ou en rémission depuis moins d'un an.", value: ""},
          {title: "Douleur spontanée d'un mollet.", value: ""},
          {title: "Douleur à la palpation ou oedème d'un mollet.", value: ""},
          {title: "Hémoptysie.", value: ""},
          { title: "Fréquence cardiaque entre 75 et 94 bpm.", value: "" },
          { title: "Fréquence cardiaque > 94 bpm.", value: "" },

        ]
      }
    ]
  },
        {
    id:7,
    name: "GOLD, BPCO (stades)",
    questions: [
      {
        title: "Sévérité BPCO.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:8,
    name: "GOLD ABCD 2017, BPCO (Classification)",
    questions: [
      {
        title: "Classification gravité BPCO.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Gradient Alvéolo-artériel en O2",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:10,
    name: "Hestia (Critères)",
    questions: [
      {
        title: "",
        responses: [
          { title: "Instabilité hémodynamique.", value: "" },
          {title: "Thrombolyse ou embolectomie nécessaire.", value: ""},
          {title: "Saignement actif ou haut risque de saignement.", value: ""},
          {title: "Apport d'oxygène pour maintenir une saturation > 90% pendant plus de 24h.", value: ""},
          {title: "Embolie pulmonaire diagnostiquée pendant la prise d'un traitement anticoagulant.", value: ""},
          {title: "Traitement antalgique I.V. pendant plus de 24h.", value: ""},
          {title: "Raison médicale ou sociale impliquant une hospitalisation de plus de 24h.", value: ""},
          {title: "Clairance de la créatinine < 30 ml/min.", value: ""},
          {title: "Atteinte hépatique sévère.", value: ""},
          { title: "Femme enceinte.", value: "" },
          {title: "Antécédent documenté de thrombocytopénie induite par l'héparine.", value: ""},
        ]
      }
    ]
  },
        {
    id:11,
    name: "IDSA/ATS 2007 (Critères)",
    questions: [
      {
        title: "Gravité pneumopathie.",
        responses: [
          { title: "Instabilité hémodynamique.", value: "" },
            {title: "Thrombolyse ou embolectomie nécessaire.", value: ""},
              {title: "Saignement actif ou haut risque de saignement.", value: ""},
                {title: "Apport d'oxygène pour maintenir une saturation > 90% pendant plus de 24h.", value: ""},
                  {title: "Embolie pulmonaire diagnostiquée pendant la prise d'un traitement anticoagulant.", value: ""},
                    {title: "Traitement antalgique I.V. pendant plus de 24h.", value: ""},
                      {title: "Raison médicale ou sociale impliquant une hospitalisation de plus de 24h.", value: ""},
                        {title: "Clairance de la créatinine < 30 ml/min.", value: ""},
                          {title: "Atteinte hépatique sévère.", value: ""},
                            {title: "Femme enceinte.", value: ""},
        {title: "Antécédent documenté de thrombocytopénie induite par l'héparine.", value: ""}
        ]
      }
    ]
  },
        {
    id:12,
    name: "mMRC, dyspnée (Echelle)",
    questions: [
      {
        title: "Evaluation dyspnée chronique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id:13,
    name: "PERC, E.P. (Règle)",
    questions: [
      {
        title: "Probabilité embolie pulmonaire.",
        responses: [
          { title: "Age < 50 ans.", value: "" },
          {title: "Pouls < 100/mn.", value: ""},
          {title: "SaO2 > 94%.", value: ""},
          {title: "Absence d’œdème unilatéral d’un membre inférieur.", value: ""},
          {title: "Absence d’hémoptysie.", value: ""},
          {title: "Pas de traumatisme ou de chirurgie dans les quatre semaines précédentes.", value: ""},
          {title: "Absence d’antécédents d’embolie pulmonaire ou de thrombose veineuse profonde.", value: ""},
          {title: "Absence de traitement œstrogénique per os.", value: ""},
        ]
      }
    ]
  },
        {
    id:14,
    name: "PESI (Score)",
    questions: [
      {
        title: "Gravité embolie pulmonaire.",
        responses: [
          { title: "Sexe masculin", value: "" },
          {title: "Cancer (antécédent ou évolutif).", value: ""},
          {title: "Insuffisance cardiaque", value: ""},
          {title: "Insuffisance respiratoire chronique.", value: ""},
          {title: "Fréquence cardiaque ≥ 110/mn.", value: ""},
          {title: "Pression artérielle systolique < 100 mmHg.", value: ""},
          {title: "Fréquence respiratoire ≥ 30/mn.", value: ""},
          {title: "Température < 36°C.", value: ""},
          {title: "Altération de l'état de conscience.", value: ""},
          {title: "Saturation artérielle en oxygène < 90%.", value: ""},
        ]
      }
    ]
  },
        {
    id:15,
    name: "Rapport PaO2/FiO2",
    questions: [
      {
        title: "Sévérité hypoxie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:16,
    name: "SMART-COP (Score)",
    questions: [
      {
        title: "",
        responses:  [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:17,
    name: "Wells, E.P. (Score)",
    questions: [
      {
        title: "",
        responses: [
          { title: "Antécédent de thrombose veineuse profonde ou d'embolie pulmonaire.", value: "" },
          {title: "Fréquence cardiaque > 100/mn.", value: ""},
          {title: "Chirurgie récente ou immobilisation (moins d'un mois).", value: ""},
          {title: "Signe de thrombose veineuse profonde.", value: ""},
          {title: "Absence d'autre diagnostic ou diagnostic moins probable que l'E.P.", value: ""},
          {title: "Hémoptysie.", value: ""},
          {title: "Cancer évolutif ou en rémission depuis moins de 6 mois.", value: ""},
        ]
      }
    ]
  },
        {
    id:18,
    name: "Winter (Formule)",
    questions: [
      {
        title: "Compensation respiratoire trouble acido-basique",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
      id:22,
      name: "Psychiatrie",
      image: "/assets/img/psychiatrie.svg",
      diseasesLink: "/specialities/psychiatrie",
      diseases: [
        {
          id: 1,
          name:"Anxiété de Hamilton (Echelle)",
    questions: [
      {
        title: "Humeur anxieuse",
        responses: [
          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},

        ]
      },
      {
        title: "Tension",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Peurs",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Insomnie",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Fonctions intellectuelles (cognitives)",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Humeur dépressive",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes somatiques généraux (musculaires)",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes somatiques généraux (sensoriels)",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
     
      },
      {
        title: "Symptômes cardiovasculaires",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes respiratoires",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes gastro-intestinaux.",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes génito-urinaires",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Symptômes du système nerveux autonome",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
      {
        title: "Comportement lors de l'entretien",
        responses: [

          { title: "0 - Absent", value: "" },
          {title: "1 - Léger", value: ""},
          {title: "2 - Moyen", value: ""},
          {title: "3 - Fort", value: ""},
          {title: "4 - Maximal", value: ""},        ]
      },
    ]
  },
        {
    id:2,
    name: "BDI-13 de Beck (Echelle)",
    questions: [
      {
        title: "A",
        responses: [
          { title: "0 - Je ne me sens pas triste.", value: "" },
          {title: "1 - Je me sens cafardeux ou triste.", value: ""},
          {title: "2 - Je me sens tout le temps cafardeux ou triste et je n'arrive pas à en sortir.", value: ""},
          {title: "3 - Je suis si triste et si malheureux que je ne peux pas le supporter.", value: ""},
        ]
      },

         {
        title: "B",
        responses: [
          { title: "0 - Je ne suis pas particulièrement découragé ni pessimiste au sujet de l'avenir.", value: "" },
          {title: "1 - J'ai un sentiment de découragement au sujet de l'avenir.", value: ""},
          {title: "2 - Pour mon avenir, je n'ai aucun motif d'espérer.", value: ""},
          {title: "3 - Je sens qu'il n'y a aucun espoir pour mon avenir et que la situation ne peut s'améliorer.", value: ""},

        ]
      }, {
        title: "C",
        responses: [
          { title: "0 - Je n'ai aucun sentiment d'échec de ma vie.", value: "" },
          {title: "1 - J'ai l'impression que j'ai échoué dans ma vie plus que la plupart des gens.", value: ""},
          {title: "2 - Quand je regarde ma vie passée, tout ce que j'y découvre n'est qu'échecs.", value: ""},
          {title: "3 - J'ai un sentiment d'échec complet dans toute ma vie personnelle (dans mes relations avec mes parents, mon mari, ma femme, mes enfants).", value: ""},

        ]
      }, {
        title: "D",
        responses: [
          { title: "0 - Je ne me sens pas particulièrement insatisfait.", value: "" },
          {title: "1 - Je ne sais pas profiter agréablement des circonstances.", value: ""},
          {title: "2 - Je ne tire plus aucune satisfaction de quoi que ce soit.", value: ""},
          {title: "3 - Je suis mécontent de tout.", value: ""},
          
        ]
      }, {
        title: "E",
        responses: [
          { title: "0 - Je ne me sens pas coupable.", value: "" },
          {title: "1 - Je me sens mauvais ou indigne une bonne partie du temps.", value: ""},
          {title: "2 - Je me sens coupable.", value: ""},
          {title: "3 - Je me juge très mauvais et j'ai l'impression que je ne vaux rien.", value: ""},
        ]
      }, {
        title: "F",
        responses: [
          { title: "0 - Je ne suis pas déçu par moi-même.", value: "" },
          {title: "1 - Je suis déçu par moi-même.", value: ""},
          {title: "2 - Je me dégoûte moi-même.", value: ""},
          {title: "3 - Je me hais.", value: ""},
        ]
      }, {
        title: "G",
        responses: [
          { title: "0 - Je ne pense pas à me faire du mal.", value: "" },
          {title: "1 - Je pense que la mort me libérerait.", value: ""},
          {title: "2 - J'ai des plans précis pour me suicider.", value: ""},
          {title: "3 - Si je le pouvais, je me tuerais.", value: ""},
        ]
      }, {
        title: "H",
        responses: [
          { title: "0 - Je n'ai pas perdu l'intérêt pour les autres gens.", value: "" },
          {title: "1 - Maintenant, je m'intéresse moins aux autres gens qu'autrefois.", value: ""},
          {title: "2 - J'ai perdu tout l'intérêt que je portais aux autres gens et j'ai peu de sentiments pour eux.", value: ""},
          {title: "3 - J'ai perdu tout intérêt pour les autres et ils m'indiffèrent totalement.", value: ""},
        ]
      }, {
        title: "I",
        responses: [
          { title: "0 - Je suis capable de me décider aussi facilement que de coutume.", value: "" },
          {title: "1 - J'essaie de ne pas avoir à prendre de décision.", value: ""},
          {title: "2 - J'ai de grandes difficultés à prendre des décisions.", value: ""},
          {title: "3 - Je ne suis plus capable de prendre la moindre décision.", value: ""},
        ]
      }, {
        title: "J",
        responses: [
          { title: "0 - Je n'ai pas le sentiment d'être plus laid qu'avant.", value: "" },
          {title: "1 - J'ai peur de paraître vieux ou disgracieux.", value: ""},
          {title: "2 - J'ai l'impression qu'il y a un changement permanent dans mon apparence physique qui me fait paraître disgracieux.", value: ""},
          {title: "3 - J'ai l'impression d'être laid et repoussant.", value: ""},
        ]
      }, {
        title: "K",
        responses: [
          { title: "0 - Je travaille aussi facilement qu'auparavant.", value: "" },
          {title: "1 - Il me faut faire un effort supplémentaire pour commencer à faire quelque chose.", value: ""},
          {title: "2 - Il faut que je fasse un très grand effort pour faire quoi que ce soit.", value: ""},
          {title: "3 - Je suis incapable de faire le moindre travail.", value: ""},
        ]
      }, {
        title: "L",
        responses: [
          { title: "0 - Je ne suis pas plus fatigué que d'habitude.", value: "" },
          {title: "1 - Je suis fatigué plus facilement que d'habitude.", value: ""},
          {title: "2 - Faire quoi que ce soit me fatigue.", value: ""},
          {title: "3 - Je suis incapable de faire le moindre travail.", value: ""},
        ]
      }, {
        title: "M",
        responses: [
          {title: "0 - Mon appétit est toujours aussi bon.", value: ""},
          {title: "1 - Mon appétit n'est pas aussi bon que d'habitude.", value: ""},
          {title: "2 - Mon appétit est beaucoup moins bon maintenant.", value: ""},
          {title: "3 - Je n'ai plus du tout d'appétit.", value: ""},
        ]
      },

    ]
  },
        {
          id: 3,
          name: "BITS-Test(Questionnaire)",
          questions: [
            {
              title: "• As-tu souvent des insomnies ou des troubles du sommeil ?",
              responses: [
                { title: "0 - Non", value: "" },
                 { title: "1 - Oui", value: "" },
                  { title: "2-...Des cauchemars", value: "" },
              ]
            },
            {
              title: "• Te sens-tu stressé par ton travail scolaire ou par l’ambiance familiale ?",
              responses: [
              
                { title: "0 - Non", value: "" },
                 { title: "1 - Oui", value: "" },
                { title: "2-...Par les deux", value: "" }
              ]
            },
             {
        title: "• As-tu été victime de brimades ou de harcèlement à l’école, ou par téléphone ou par Internet ?",
               responses: [
        
                { title: "0 - Non", value: "" },
                 { title: "1 - Oui", value: "" },
          {title: "2-...Et en dehors de l'école", value: ""}
        ]
            },
              {
        title: "• Est-ce que tu fumes ?",
                responses: [
        
                { title: "0 - Non", value: "" },
                { title: "1 - Oui", value: "" },
                {title: "2-...Tous les jours", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Dépression de Hamilton (Echelle)",
    questions: [
      {
        title: "Humeur dépressive",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Sentiments de culpabilité",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Suicide",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Insomnie du début de la nuit",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Insomnie du milieu de la nuit",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Insomnie du matin",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },{
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      },
    ]
  },
        {
    id:5,
    name: "Gaz du Sang (Interprétation)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "Genève révisé (Score)",
    questions: [
      {
        title: "Probabilité embolie pulmonaire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:7,
    name: "GOLD, BPCO (stades)",
    questions: [
      {
        title: "Sévérité BPCO.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:8,
    name: "GOLD ABCD 2017, BPCO (Classification)",
    questions: [
      {
        title: "Classification gravité BPCO.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Gradient Alvéolo-artériel en O2",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 10,
    name: "Hestia (Critères)",
    questions: [
      {
        title: "Traitement embolie pulmonaire en ambulatoire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 11,
    name: "IDSA/ATS 2007 (Critères)",
    questions: [
      {
        title: "Gravité pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 12,
    name: "mMRC, dyspnée (Echelle)",
    questions: [
      {
        title: "Evaluation dyspnée chronique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:13,
    name: "PERC, E.P. (Règle)",
    questions: [
      {
        title: "Probabilité embolie pulmonaire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:14,
    name: "PESI (Score)",
    questions: [
      {
        title: "Gravité embolie pulmonaire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
  {id:15,
    name: "Rapport PaO2/FiO2",
    questions: [
      {
        title: "Sévérité hypoxie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:16,
    name: "SMART-COP (Score)",
    questions: [
      {
        title: "Risque ventilation et amines sur pneumopathie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:17,
    name: "Wells, E.P. (Score)",
    questions: [
      {
        title: "Probabilité embolie pulmonaire.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:18,
    name: "Winter (Formule)",
    questions: [
      {
        title: "Compensation respiratoire trouble acido-basique",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]
   },
  {
       id:23,
      name: "Réanimation",
      image: "/assets/img/reanimation.svg",
      diseasesLink: "/specialities/réanimation",
      diseases:[
        {
    id:1,
    name: "APACHE II (Score)",
    questions: [
      {
        title: "Gravité patient en réanimation.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Contenu A/V en O2 et dérivés",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "IGS II (Score)",
    questions: [
      {
        title: "Gravité patient en réanimation.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "qSOFA (Score)",
    questions: [
      {
        title: "Gravité sepsis simplifiée.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 5,
    name: "ROX (Index)",
    questions: [
      {
        title: "Echec traitement détresse respiratoire par haut débit nasal.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "SOFA (Score)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
       id:24,
      name: "Rhumatologie",
      image: "/assets/img/rhumatologie.svg",
      diseasesLink: "/specialities/rhumatologie",
      diseases:[
        {
    id:1,
    name: "ASDAS (Score)",
    questions: [
      {
        title: "Activité spondylarthrite ankylosante.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "BASDAI (Score)",
    questions: [
      {
        title: "Activité spondylarthrite ankylosante.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "BASFI (Score)",
    questions: [
      {
        title: "Retentissement spondylarthrite ankylosante.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 4,
    name: "DAS 28 (Score)",
    questions: [
      {
        title: "Activité polyarthrite rhumatoïde.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:5,
    name: "FiRST (Questionnaire)",
    questions: [
      {
        title: "Dépistage fibromyalgie.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "HAQ (Questionnaire)",
    questions: [
      {
        title: "Activité polyarthrite rhumatoïde.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:7,
    name: "Polyarthrite rhumatoïde, ACR/EULAR (Critères)",
    questions: [
      {
        title: "Aide diagnostic polyarthrite rhumatoïde.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:8,
    name: "SDAI (Score)",
    questions: [
      {
        title: "Activité polyarthrite rhumatoïde.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:9,
    name: "Spondylarthrite axiale, ASAS (Critères)",
    questions: [
      {
        title: "Définition spondylarthrite axiale.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:10,
    name: "Spondylarthrite périphérique, ASAS (Critères)",
    questions: [
      {
        title: "Définition spondylarthrite périphérique.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:11,
    name: "Spondylarthrite, Amor (Critères)",
    questions: [
      {
        title: "Aide diagnostic spondylarthrite.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:12,
    name: "Spondylarthrite, ESSG (Critères)",
    questions: [
      {
        title: "Aide diagnostic spondylarthrite.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:13,
    name: "WPI et SSS (Scores)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
      id:25,
      name: "Soins Infirmiers",
      image: "/assets/img/soins.svg",
      diseasesLink: "/specialities/soins",
      diseases: [
        {
    id:1,
    name: "A-DIVA (Score)",
    questions: [
      {
        title: "Prédiction de la difficulté à perfuser un adulte.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Débit de Perfusion",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Débit P.S.E.",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Débit P.S.E. drogue vasoactive",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:5,
    name: "Débit P.S.E. Poids et Temps",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "DIVA (Score)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
       id:26,
      name: "Stomatologie",
      image: "/assets/img/stoma.svg",
      diseasesLink: "/specialities/stomatologie",
    diseases: [{
        id:1,
        name: "Schéma dentaire",
        questions:[{
          title:"",
          responses:[
              {title:"",value:""}
          ]
        }]
      }]
  },
  {
    id:27,
      name: "Toxicologie",
      image: "/assets/img/toxicologie.svg",
      diseasesLink: "/specialities/toxicologie",
      diseases:[
        {
    id:1,
    name: "Alcoolémie (Widmark)",
    questions: [
      {
        title: "Calcul alcoolémie selon consommation.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:2,
    name: "Antidotes",
    questions: [
      {
        title: "Liste antidotes pour intoxications.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "Cushman (Score)",
    questions: [
      {
        title: "Sévérité pré-délirium tremens.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:4,
    name: "Envenimation Vipérine (Grades)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:5,
    name: "Fagerström (Test)",
    questions: [
      {
        title: "Dépendance à la nicotine.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:6,
    name: "Paquets-années, tabac (calcul)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 7,
    name: "POMI (Questionnaire)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]

    },
  {
       id:28,
      name: "Urologie",
      image: "/assets/img/urologie.svg",
      diseasesLink: "/specialities/urologie",
      diseases: [
        {
    id:1,
    name: "Fractures du rein, AAST (Classification)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
          id: 2,
          
    name: "IPSS (Score)",
    questions: [
      {
        title: "Sévérité hyperplasie bénigne prostate.",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  },
        {
    id:3,
    name: "STONE (Score)",
    questions: [
      {
        title: "",
        responses: [
          {title: "", value: ""}
        ]
      }
    ]
  }
]
    },

]
