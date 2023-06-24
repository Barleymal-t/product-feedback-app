import { styled } from "styled-components";
import { colors } from "../colors";

/*
SuggestionsPage Styles
*/

export const Suggestions = styled.main`
  max-width:1110px;
  width:90%;
  margin: 94px auto ;
  background-color: ${colors.lightGrey};
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 4fr;
  @media (max-width: 768px) {
    margin:39px;
    margin:56px 39px;
    max-width:689px;
    display:block;
  }
`;

export const SuggestionsSection = styled.section`
  > .headbar {
    max-width: 825px;
    color: white;
    background-color: ${colors.deepBlue};
    height: 72px;
    margin-bottom: 2rem;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    > .left {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }
  }
  > .suggestions {
    display: grid;
    gap: 2rem;
  }
`;

export const CustomizationPane = styled.aside`
width:255px;
display:flex;
flex-direction:column;
gap:24px;
>* {
  width:100%;
  border-radius:10px;
  background:${colors.white};
  padding:24px;
  @media (max-width: 768px) {
    height:auto;
    margin-bottom:2rem;
  }
}
> .label {
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  color:${colors.white};
  background: url('../assets/suggestions/desktop/background-header.png');
  height:137px;
  @media (max-width: 768px) {
    height:auto;
    background: url('../assets/suggestions/tablet/background-header.png');
  }
}
> .categories {
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  @media (max-width: 768px) {
    padding-right:0;
  }
}
> .roadmap {
  > .heading {
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  >.content {
    > li {
      
      display:flex;
      justify-content:space-between;
    }
  }
}
@media (max-width: 768px) {
  height:max-content;
  width:100%;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:10px;
  margin-bottom:2rem;
}
`;

export const EmptySuggestions= styled.section`
background-color:${colors.white};
height:70vh;
width:100%;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2rem;
text-align:center;
`

/*
Feedback Details
*/

export const FeedbackDetail = styled.main`
background-color: ${colors.lightGrey};
width:730px;
margin: 80px auto;
display:grid;
gap:24px;
`

export const FeedbackTop = styled.div`
display:flex;
justify-content:space-between;
`

export const CommentsSection = styled.section`
width:100%;
border-radius:10px;
background:${colors.white};
padding:34px 24px;
> h1{
  font-size:18px;
}

`

export const Comment = styled.div`
b {
  color:${colors.purple}
}
.main {
  display:grid;
  grid-template-columns:auto 90%;
  gap:17px 32px;
}
padding:32px 0;
&:not(:last-child) {
  border-bottom:1px solid ${colors.scorchedBlue};
}
img {
  width:40px;
  height:40px;
  border-radius:50%;
}
 h3,span {
  font-size:14px;
}

`

export const Reply = styled(Comment)`
margin-left:40px;
border-bottom:0 !important;
`
export const AddComment = styled.section`
background-color:${colors.white};
width:100%;
display:grid;
gap:16px;
padding:32px;
border-radius:10px;
textarea {
  background-color:${colors.lightGrey};
  width:100%;
  border:1px solid ${colors.deepBlue};
  border-radius:10px;
  padding:24px 16px;
}
.flex {
  display:flex;
  justify-content:space-between;
  align-items:center;
}
`