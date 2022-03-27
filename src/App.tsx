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
      <div>
        <label>y</label>
        <S.ScrollBox mandatory={false}>
          {image.map((img, index) => (
            <S.ItemBox key={index} img={"img/" + img} />
          ))}
        </S.ScrollBox>
      </div>
      <div>
        <label>y mandatory</label>
        <S.ScrollBox mandatory={true}>
          {image.map((img, index) => (
            <S.ItemBox key={index} img={"img/" + img} />
          ))}
        </S.ScrollBox>
      </div>
    </S.Page>
  );
}

export default App;
