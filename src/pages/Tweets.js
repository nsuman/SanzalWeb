import React from 'react';
import Container from '@mui/material/Container';
import Wordcloud from '../components/WordCloud';
import SelectMultiple from '../components/MultipleSelect';

export default function Tweets() {
  const [dummyState, setDummyState] = React.useState(0);
  const data =[
    {
        "label": "Baburam Bhattarai",
        "username": "brb1954"
    },
    {
        "label": "Balen Shah",
        "username": "ShahBalen"
    },
    {
        "label": "Madhav Kumar Nepal",
        "username": "ncp_madhavnepal"
    },
    {
        "label": "Anti Human Trafficking Bureau, Nepal",
        "username": "AHTBureau"
    },
    {
        "label": "Akhilesh Upadhyay",
        "username": "akhileshU"
    },
    {
        "label": "Ameet Dhakal",
        "username": "ameetdhakal"
    },
    {
        "label": "Annapurna Post",
        "username": "Annapurna_Post"
    },
    {
        "label": "12 Khari",
        "username": "baarakhari"
    },
    {
        "label": "Basanta Basnet",
        "username": "basantabasnet"
    },
    {
        "label": "Bhagirath Yogi",
        "username": "BhagirathYogi"
    },
    {
        "label": "Bidya Bhattarai",
        "username": "Bidyabhattarai"
    },
    {
        "label": "Bijay Paudel",
        "username": "Bijaysspaudel"
    },

    {
        "label": "NepalCIAA",
        "username": "ciaa_nepal"
    },
    {
        "label": "Department of Information Technology, Nepal",
        "username": "doitnepal"
    },
    {
        "label": "\u0935\u093e\u0923\u093f\u091c\u094d\u092f, \u0906\u092a\u0942\u0930\u094d\u0924\u093f \u0924\u0925\u093e \u0909\u092a\u092d\u094b\u0915\u094d\u0924\u093e \u0938\u0902\u0930\u0915\u094d\u0937\u0923 \u0935\u093f\u092d\u093e\u0917",
        "username": "dsmpci"
    },
    {
        "label": "Nepal Embassy, India",
        "username": "EONIndia"
    },
    {
        "label": "Embassy of Nepal, Moscow",
        "username": "eonmoscow"
    },
    {
        "label": "Gajendra S. Budhathoki \u267f",
        "username": "gbudhathoki"
    },
    {
        "label": "Ghanashyam Bhusal",
        "username": "gsbhusal"
    },
    {
        "label": "Guna Raj Luitel",
        "username": "gunaraj"
    },
    {
        "label": "\u0936\u093f\u0915\u094d\u0937\u093e, \u0935\u093f\u091c\u094d\u091e\u093e\u0928 \u0924\u0925\u093e \u092a\u094d\u0930\u0935\u093f\u0927\u093f \u092e\u0928\u094d\u0924\u094d\u0930\u093e\u0932\u092f",
        "username": "HelloMoeNepal"
    },
    {
        "label": "Civil Aviation Authority of Nepal",
        "username": "hello_CAANepal"
    },
    {
        "label": "Department of Tourism-Nepal",
        "username": "hello_dotnpl"
    },
    {
        "label": "\u0915\u0943\u0937\u093f \u0924\u0925\u093e \u092a\u0936\u0941\u092a\u0928\u094d\u091b\u0940 \u0935\u093f\u0915\u093e\u0938 \u092e\u0928\u094d\u0924\u094d\u0930\u093e\u0932\u092f",
        "username": "Hello_MOALD"
    },
    {
        "label": "\u0939\u0947\u0932\u094b \u0938\u0930\u0915\u093e\u0930 || Hello Sarkar",
        "username": "hello_sarkar"
    },
    {
        "label": "Tourism Ministry, Nepal [MOCTCA]\ud83c\uddf3\ud83c\uddf5",
        "username": "hello_tourismnp"
    },
    {
        "label": "Himalaya Television",
        "username": "himalayahd"
    },
    {
        "label": "Himal Khabar",
        "username": "Himal_Khabar"
    },
    {
        "label": "Kishore Thapa",
        "username": "Kishore_Sajha"
    },
    {
        "label": "Milan Pandey",
        "username": "MilanPandey"
    },
    {
        "label": "The Annapurna Express",
        "username": "TheAnnaExpress"
    },
    {
        "label": "The Himalayan Times",
        "username": "thehimalayan"
    },
    {
        "label": "Minendra Rijal",
        "username": "MinendraRijal"
    },
    {
        "label": "Ministry of Industry, Commerce and Supplies",
        "username": "MoCNepal"
    },
    {
        "label": "\u0905\u093e\u0930\u094d\u0925\u093f\u0915 \u092e\u093e\u092e\u093f\u0932\u093e \u0924\u0925\u093e \u092f\u094b\u091c\u0928\u093e \u092e\u0928\u094d\u0924\u094d\u0930\u093e\u0932\u092f, \u0917\u0923\u094d\u0921\u0915\u0940 \u092a\u094d\u0930\u0926\u0947\u0936",
        "username": "MoeapG"
    },
    {
        "label": "\u0938\u0919\u094d\u200c\u0918\u0940\u092f \u092e\u093e\u092e\u093f\u0932\u093e \u0924\u0925\u093e \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u092a\u094d\u0930\u0936\u093e\u0938\u0928 \u092e\u0928\u094d\u0924\u094d\u0930\u093e\u0932\u092f",
        "username": "mofaganepal"
    },
    {
        "label": "MOFA of Nepal \ud83c\uddf3\ud83c\uddf5",
        "username": "MofaNepal"
    },
    {
        "label": "MOF Nepal \ud83c\uddf3\ud83c\uddf5",
        "username": "mofnepal"
    },
    {
        "label": "\u0917\u0943\u0939 \u092e\u0928\u094d\u0924\u094d\u0930\u093e\u0932\u092f (\u0917\u0941\u0928\u093e\u0938\u094b \u0915\u0915\u094d\u0937)",
        "username": "MoHAGunaso"
    },
    {
        "label": "MOHA Nepal",
        "username": "moha_nepal"
    },
  
    {
        "label": "Embassy of Nepal,London",
        "username": "NepalEmbassyUK"
    },
    {
        "label": "\ud83c\uddf3\ud83c\uddf5JudiciaryNepal\ud83c\uddf3\ud83c\uddf5",
        "username": "NepalJudgeNP"
    },
    {
        "label": "National Planning Commission",
        "username": "NEPALNPC"
    },
    {
        "label": "Nepal Police",
        "username": "NepalPoliceHQ"
    },
    {
        "label": "Nepal Rastra Bank",
        "username": "NepalRastraBank"
    },
    {
        "label": "Nepal Tourism Board",
        "username": "nepaltourismb"
    },
    {
        "label": "Nepal Mission to the UN",
        "username": "NepalUNNY"
    },
    {
        "label": "Embassy of Nepal, Ottawa",
        "username": "nepal_of"
    },
    {
        "label": "NKShresthaPrakash",
        "username": "nksthaprakash"
    },
    {
        "label": "Onlinekhabar",
        "username": "Online_khabar"
    },
    {
        "label": "Parliament & Nepal",
        "username": "ParliamentNepal"
    },
    {
        "label": "Bidya Devi Bhandari",
        "username": "PresidentofNP"
    },
    {
        "label": "PSC Nepal",
        "username": "PSC_Nepal"
    },
    {
        "label": "Rajan Bhattarai",
        "username": "Rajanktm"
    },
    {
        "label": "Rajan Bhattarai",
        "username": "Rajanktm"
    },
    {
        "label": "Ranju Darshana",
        "username": "ranju_darshana"
    },
    {
        "label": "RatoPati",
        "username": "Rato_pati"
    },
    {
        "label": "salokya",
        "username": "salokya"
    },
 
    {
        "label": "Dr Shekhar Koirala",
        "username": "Shekharnc"
    },
    {
        "label": "social democracy\ud83c\uddf3\ud83c\uddf5",
        "username": "social_democrac"
    },
    {
        "label": "Agni Prasad Sapkota",
        "username": "speaker_nepal"
    },
    {
        "label": "Sudheer Sharma",
        "username": "sudheerktm"
    },
    {
        "label": "All Nepal Football Association",
        "username": "theanfaofficial"
    },
  
    {
        "label": "Nepali Army",
        "username": "thenepalesearmy"
    },
    {
        "label": "Tika Ram Yatri",
        "username": "tikaramyatri"
    },
    {
        "label": "Umesh Chauhan",
        "username": "Umesh_Chauhan"
    },
    {
        "label": "Kathmandu Valley Traffic Police Office",
        "username": "valleytraffic"
    }
]
  const [selectedValue, setSelectedValue] = React.useState([data[0]]);

  console.log('selectedValue', selectedValue);
  const wordClouds = selectedValue.map((element, index) => {
    return  <Wordcloud username={element.username} key={index}/>;
  })
  return (
    <Container>
    <SelectMultiple selectOptions={data} onChange={(event, newValue)=> {
      console.log(newValue);
      setSelectedValue(newValue)}}/>
    {wordClouds}
    </Container>
  )
};
