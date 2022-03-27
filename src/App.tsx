import * as S from "./style/app";
const image = importAll(require.context("../public/img"));

function importAll(r: any) {
  let img: string[] = [];
  r.keys().forEach((item: string, index: number) => {
    img[index] = item;
  });
  return img;
}

function App() {
  return (
    <S.Page>
      <S.ScrollBox>
        {image.map((img, index) => (
          <S.ItemBox key={index} img={"img/" + img} />
        ))}
      </S.ScrollBox>
    </S.Page>
  );
}

export default App;
