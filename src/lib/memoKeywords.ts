/**
 * キーワードを保存
 * @param route ルート
 * @param key キーワード
 */
export const saveKeyword = (route: string, key: string) => {
  // 先に取得
  const data = localStorage.getItem(`keyword${route}`);
  // 配列なら格納、データなしならそのまま新しく配列に保存
  if (data && isJson(data)) {
    const arr:string[] = JSON.parse(data);
    const newArr = arr.includes(key) ? arr : [...arr, key];
    localStorage.setItem(`keyword${route}`, JSON.stringify(newArr));
  } else {
    const newArr = [key];
    localStorage.setItem(`keyword${route}`, JSON.stringify(newArr));
  }
};

/**
 * キーワード読み込み
 * 
 * A ~ Eを繰り返しで呼び出すようにする
 * 
 * @param route ルート
 * @returns データ
 */
export const loadKeyword = (route: string) => {
  const data = localStorage.getItem(`keyword${route}`);
  if (data && isJson(data)) {
    const arr: string[] = JSON.parse(data);
    return arr;
  } else {
    return [];
  }
};

export const deleteKeyword = (route: string) => {
  localStorage.removeItem(`keyword${route}`)
}

const isJson = (text: string) => {
  try {
    JSON.parse(text);
    return true;
  } catch (error) {
    return false;        
  }
};