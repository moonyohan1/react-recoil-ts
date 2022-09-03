# Redux

### Flux Architecture



![images_katanazero86_post_9d6b57de-ce97-4597-b924-1c02e09722d0_flux](\img\images_katanazero86_post_9d6b57de-ce97-4597-b924-1c02e09722d0_flux.png)

- 데이터의 흐름이 단방향
- Action생성 -> Dispatcher는 Action을 Store에게 전달 -> State변경 -> Re-render



### React

![images_juno7803_post_cbdb738a-2e03-4421-8586-45934d800357_image](\img\images_juno7803_post_cbdb738a-2e03-4421-8586-45934d800357_image.png)

- State를 어느 컴포넌트에서도 접근할 수 있도록 전역관리 (중앙집중식)
  - Context를 공유한다.



### React-Redux

- React 를 위한 UI binding library

- Provider 하위 컴포넌트들은 ReactReduxContext로 묶이게 되고 connect API / React-Reduxt Hooks 를 통해 store에 접근 가능하게 된다

  

### Selector

- 데이터에 대한 계산을 selector가 해주어서, redux가 적은 양의 필요한 데이터만을 가지고 있게 도와준다.
- state를 가져오는 컴포넌트들과 state의 구조 사이 한 층(selector)을 두어 구조가 바뀌어도 연관된 모든 컴포넌트를 바꿀 필요 없이, selector만 바꿔주면 된다.
- **reselect**를 이용할 경우 memoization 적용하여 불필요한 재계산을 방지하여 효율적이다.



### 문제점

- redux 를 사용하기 위해서는 전체앱에 감싸야한다.
- state변경시 Provider 하위의 모든 consumer들은 Provider 속성이 변경될 때마다 다시 렌더링된다
  - memozation을 통해 일부 해결할 수 있지만 한계가 존재
- useSelector() 훅같은 경우 두번째 인자로 react-redux 패키지에서 제공하는 shallowEqual 함수 전달이 가능하며 이전값과 다음값을 비교하는데 얕은 비교를 함
  `useSelector(selector: Function, equalityFn?: Function)`
  `equalityFn?: (prev: any, next: any) => boolean`
  false 인 경우 rerender true 인 경우 rerender 하지 않음
  이러한 비교연산은 BF(Brute Force) 방식으로 진행하므로 객체 키값들이 많으면 성능적으로 좋지 않고 하나하나 직접 작성하는거도 번거로움
- 파생된 상태(상태 계산)는 reselect 패키지에 의존해야 합니다.



# React-Recoil



![images_katanazero86_post_72a56455-f5cb-43ec-98e2-400351386a5c_2239896899-bb568571883bd6d2_articlex](\img\images_katanazero86_post_72a56455-f5cb-43ec-98e2-400351386a5c_2239896899-bb568571883bd6d2_articlex.png)

- React를 위한 상태관리 라이브러리
- Recoil을 사용하면 *atoms* (공유 상태)에서 *selectors* (순수 함수)를 거쳐 React 컴포넌트로 내려가는 data-flow graph를 만들 수 있다.



### RecoilRoot

- recoil 상태를 사용하기 위해 필요한 컴포넌트
- root컴포넌트를 감싼다

```javascript
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```



### Atom

- Atom이라는 단위로 상태관리를 하며 컴포넌트는 Atom을 구독하는 형태
- Atom의 값이 변경되면 구독하고 있는 컴포넌트들만 Re-Render

```javascript
import {nameState} from './someplace'

// useRecoilState
const NameInput = () => {
  const [name, setName] = useRecoilState(nameState);
  const onChange = (event) => {
   setName(event.target.value);
  };
  return <>
   <input type="text" value={name} onChange={onChange} />
   <div>Name: {name}</div>
  </>;
}

// useRecoilValue
const SomeOtherComponentWithName = () => {
  const name = useRecoilValue(nameState);
  return <div>{name}</div>;
}

// useSetRecoilState  
const SomeOtherComponentThatSetsName = () => {
  const setName = useSetRecoilState(nameState);
  return <button onClick={() => setName('Jon Doe')}>Set Name</button>;
}
```



>**useRecoilState —** atom의 값을 구독하여 업데이트할 수 있는 hook. `useState`와 동일한 방식으로 사용할 수 있다.
>
>**useRecoilValue —** setter 함수 없이 atom의 값을 반환만 한다.
>
>**useSetRecoilState —** setter 함수만 반환한다.



### Selector

- 상태에서 파생된 데이터로, 다른 atom에 의존하는 동적인 데이터를 만들 수 있게 해준다. 
- setter 함수를 사용해 recoil state를 변경가능하다

```javascript
// 동물 목록 상태
const animalsState = atom({
  key: 'animalsState',
  default: [{
    name: 'Rexy',
    type: 'Dog'
  }, {
    name: 'Oscar',
    type: 'Cat'
  }],
});

// 필터링 동물 상태
const animalFilterState = atom({
 key: 'animalFilterState',
 default: 'dog',
});

// 파생된 동물 필터링 목록
const filteredAnimalsState = selector({
 key: 'animalListState',
 get: ({get}) => {
   const filter = get(animalFilterState);
   const animals = get(animalsState);
   
   return animals.filter(animal => animal.type === filter);
 }
});

// 필터링된 동물 목록을 사용하는 컴포넌트
const Animals = () => {
  const animals = useRecoilValue(filteredAnimalsState);
  return animals.map(animal => (<div>{ animal.name }, { animal.type    }</div>));
}
```



### AtomFamily

- atom과 동일하지만, 다른 인스턴스와 구분이 가능한 매개변수를 받을 수 있다.
- 내부적으로 memoization을 할 것이기 때문에, 각 인스턴스마다 고유한 키를 만들 필요가 없음

```javascript
// atom
const itemWithId = memoize(id => atom({
  key: `item-${id}`,
  default: ...
}))

// atomFamily
const itemWithId = atomFamily({
  key: 'item',
  default: ...
});

// default값을 받기 위해 함수 호출 가능
const imageState = atomFamily({
  key: "imageState",
  default: id => getImage(id)
});

// 비동기 지원
const imageState = atomFamily({
  key: "imageState",
  default: async id => getImage(id)
});
```



### SelectorFamily

- 사용자 정의 매개변수로 호출 할 수 있는 함수를 반환하고 selector를 반환
- 각 고유 매개 변수값은 메모이징된 동일한 selector 인스턴스를 반환

```javascript
const myNumberState = atom({
  key: 'MyNumber',
  default: 2,
});

const myMultipliedState = selectorFamily({
  key: 'MyMultipliedNumber',
  get: (multiplier) => ({get}) => {
    return get(myNumberState) * multiplier;
  },

  // optional set
  set: (multiplier) => ({set}, newValue) => {
    set(myNumberState, newValue / multiplier);
  },
});

function MyComponent() {
  // defaults to 2
  const number = useRecoilValue(myNumberState);

  // defaults to 200
  const multipliedNumber = useRecoilValue(myMultipliedState(100));

  return <div>...</div>;
}
```









# 용어

 > 보일러 플레이트  :  **최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드**
 >
 > SSOT (Single Source Of Truth): 정보 모형과 관련된 데이터 스키마를 모든 데이터 요소를 한 곳에서만 제어 또는 편집하도록 조직하는 관례
 >
 > > 앱에서 사용하는 모든 전역 state 가 단일한 store 에 보관되어야 한다는 원칙



# reference

https://recoiljs.org/

https://ui.toast.com/weekly-pick/ko_20200616

https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0

https://itchallenger.tistory.com/539

https://velog.io/@katanazero86/redux-recoil-%EB%82%B4%EC%9A%A9-%EC%A0%95%EB%A6%AC

https://velog.io/@eensungkim/Redux-stydyv.1.5-TIL-65%EC%9D%BC%EC%B0%A8

https://godsenal.com/posts/Redux-selector-%ED%8C%A8%ED%84%B4%EA%B3%BC-reselect/

