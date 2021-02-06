import camelCase from "lodash/camelCase";

export const camelize = camelCase;

export function randomizeArray(arg: any) {
  const array = arg.slice();
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export function debug(...params: any) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(...params);
  }
}

export function pascalCase(string: string) {
  return `${string}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w+)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, "g"), "")
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

export function getFirstProductImage(images: any[] | undefined) {
  if (!images) return null;
  const item = images[0] || {};
  return item?.productImage;
}

export function getHierarchyCode(code: string) {
  return code
    .split("-")
    .map((item, index, self) => [...self].slice(0, self.length - index).join("-"));
}

export const genID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

export function getFilterParam(search: any = {}) {
  const { column, value } = search;
  return column
    ? {
        [`filter[${column}]`]: value
      }
    : false;
}

export function getSortParam(options: any = {}) {
  const { sortBy = [], sortDesc = [] } = options;
  let direction = undefined;

  if (sortDesc && sortDesc.length > 0) {
    direction = sortDesc[0] ? "desc" : "asc";
  }

  return {
    sort: sortBy[0],
    direction
  };
}

export function prescriptionStatus(status: number | string) {
  let text = "",
    color = "gray";
  switch (+status) {
    case 0:
    case 1:
    case 2:
      text = "Menunggu";
      color = "info";
      break;
    case 3:
    case 4:
    case 5:
      text = "Selesai";
      color = "success";
      break;
    case 6:
    case 7:
    case 8:
      text = "Batal";
      color = "error";
      break;
  }
  return { text, color, status };
}
