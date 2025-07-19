import { FaStar } from "react-icons/fa";

const reviews = [
  
  {
    id: 1,
    name: "Maviya Sheikh",
    rating: 5,
    review:
      "Thanks for making a beautiful bouquet. Apny bht kam time ma itna pyara bouquet bnaya literally bht pyara lg rha hai thanks again",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKDaz31mr1d-eLPE6C7U-gtq98LX5_QNIgKJHyz41xz4_kWX9EWIhEH8&s",
  },
  {
    id: 2,
    name: "Abdul Basit",
    rating: 5,
    review:
      "Thankyou so much for this amazing stunning bouquet i just loved it ❤️",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 3,
    name: "Muhammad Huzaifa",
    rating: 5,
    review:
      "Bouquet mil gaya, bohat hi cute aur pyara tha 💐🍫Thank you Bloom Envy hamesha ki tarah perfect! 💕",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAMGCAEEBQL/xABREAABAwICBQcFCgkJCQAAAAABAAIDBAUGEQcSITFxExQyQWGBkSI2UaHBQlJTYnSDhLGy0RYjJlVygpKzwhUXJCczQ2OU8CU0NURFVKLS8f/EABoBAQEAAwEBAAAAAAAAAAAAAAABAwQFAgb/xAAkEQEAAgEDAwUBAQAAAAAAAAAAAQIDBAUREjEyITRBcYEzE//aAAwDAQACEQMRAD8AIbOg3gsrDOg3gsqoSR3bNiSyBmgrzj+94jkvVZbLxXSakEpDYYvIjLfcnIb8xkduaiUcUk0gjhY6R7tzGgknuVicVYAtuKLrS11ZNLCYmakghABlGezM9WW1dOlocN4PpA9jaG2xZZGWVwDncXHaVFAq1aO8U3NrXx2t8Ebtz6kiP1Hb6lIaXQzepGg1FwoIT1gFzsvUiENIFvq5OTsdtut3fnlr01MQwfrOyW1HdMWVJBgwxTwMO7nlwAI7mtKAenQpX5Zi90p+ZetGr0OYgiBNNVUNR2B7mk+IRYZUYu2a1qsvAV8gP7tbDbjd4h/S7BI70uo6qOX1O1SqK8XbBWJLR5VZaKjk/hIm8o3xbnl3rTs1/u1imL7XXTUzgfKYD5J4tOwqzVPeaGSURPfLSzO2COqjdCT2DWyDu4lc/EWCrDiBjufULGTEbKmABkg78tveCoIRhXS1TVLm02IoBTSHYKqL+zJ+M3e3uzRLgliqIWTU8jJYnjNkjDm1w9IKB2MNF10sgfVWwm40I36jfxsY7W9fELjYMxpc8LVQbE901CXfjaR58ntLfeu/0UFjUlzsO32gxHbmV1tl12HY9h6cbveuHUfUuiqhJHckkdyBmbpDgklN0hwSQOs6DeCyvLOg3gvQ2oMgLzUzw0lPJUVUrIoIm6z5Huya0enNM3O4UlpoJq6vnbBTwtze931Dtz2AIZUkN10p3PnFXytBhmnk8iJu+Yj1F3pO5vUg6s+Mrzimtkt2BKTKFhylutQ3JrOAI4ZZ5nsC6FqwJZaeo53iO4NvVy3vfWSjUafQGE/WpjbLfSWyjio6CBkFPEMmsjGQ49p7VWvSP59Xv5W5FWViqKGJgjiqaVkY3NbI0Ady2Y3MkaHxva9p3FpzHiqeqzGiEf1fWv5z7bkEt1UtVO6qWqiGJYmSxmOZjXxuGRY4Zg9xXNMNNRP1aStjpst9PI8GPuaTmz9XIdi7BCrXphGWkG5cI/sNRVgo6+mdsfUQMkG9vLNPgesKBY90dUOIIpLnYDDDcdpcyMjk6g+g5bGu7fH0oG0lOaiUMG7rPoVhdEcbY8HBjBk0VUmzwXnqjq6WWMFpxTl+ATw/e7ngy+uljY+OSN3J1NLJsEgG9p7fQepWIsd3o77a4bjb360Mo3Hewje09oUX0pYHbiCidcrdH/tWnZuH/MMHuT8YdXh6ENNGeK34ZvXN61xbbqtwZO13907cH9mW49nBViWASO5eiOsbjtC8ncqhmbpDgklN0hwSQOM6DeC9jIbTsyXlnRbwChWlvETrLhzmlNJq1dwJiBB2sjy8s/UO9BGrzVVOkvGDbLb5XR2SicTLKz3QByL+JOxvii9b6Knt9HDSUULYaeFurHG3c0KK6LcOCwYYhdLHq1laBNOSNoBHkt7gfWVNGhQZaFWDSR593v5W5WiaFV3ST5+Xz5W5URpWb0Ptz0eWv5z7ZVZFZ/Q6P6vLV859tyipgGpaqd1UtVAyWqtOmBpdpEuTQMyRFsH6DVZstVeNJtMP5w7pM7/DDf2Grxe8VjmWxptPbUZIpCLUdO2miy90ekjfolH5I/SpP4UFyjVojGeEPpUn8K1sEzbJzLubnjrj0kUr25hLnBArTNhRtruTb1QxZUta4iZrd0cv3O2niCjw4LkYms0V/sdZa5wMp2ZMJ9w8bWnxyW4+bRLRJiI3vDfNKh+tV2/KNxJzLo/cH6x3KalV+0Z3KTD2N4aaqzjbUPNHO33rich4OAVgndaqGJukOCSU3SHBJA9F0RwCDOIHfhdpdp7dnr0tJK2Ejq1Y/Kf4nMeCMT5BBSvmO6OMvPcEHdCzHXDGlzucoB1ad78z797x7NZFHBgy2AAD0BOtCbaE61EONVW9JXn5fPlblaVoVWtJfn7fPlblFRlWi0ODPR1aeEn7xyq8N6L2BdLdtwzhejtNTbKuaSn1s5I3NAObievigPOSzkhKNPVm/Mtf+2z705DpztU7wyOyV5P6bPvSZ4WtZtPEdxULVX3Sl583H5v7AU5OmO2/mit/bZ96GmL7xHf8QVVzhifCybVyY8jMZAD2LVz3ravEO7telzYs02vXiOHGRr0Q+Z/0qT2IJ9SNuiDzP+lSexeNP5trePb/AKmLk24J5w2Jpy3nyyu+lugNmx2+qpgWioayqYRu1s8j62+tHK11jbjaqOuZ0amBko/WaChvp9owaW01oG1j5ITwIBH1FSvRlUc6wLaXZ56kbo/2XEKK783SHBJZmHlDgsKo0MUSOhwndpYzk9lBMQe3kyhzoBA51ej18nFs73IkYjhdU4XusDOlJQytHEsKFmgWqDL/AHKkO+WkEg4teBl/5KKOLU61NNTrVUPNVWdJfn7fPlblaViq1pL8/b58rcoqMpJIi4U0SXTE1iprvTXKihiqNbVZIH6wyJG3IdiAeAEkADady71BSiniDiPLdvRDpNBl3gkD3XW3vI3DJ/3LoHQ7eM/+JUA7n/csGbrn0iHW222nxT/plt6/EBqkiSdDt4H/AFKg8H/coRiKzzWG7z2yplZLLDq6zowcjmAevitS1LV7w72LV4ctumluZc3qRu0QeZ/0qT2IJdSNmiDzP+lSexZdP5tPePb/AKmbtyacnXJpy3nywa6dY9bCVM/3la0+LXBbWh7zDpM/hpcv2lpaeJdXClHH1vrW7ODHLq6K4DT4CtodveJJPF5yUVJZukOCSU3SHBJVHvUEsJjdue3VPeFX/BFT+DWkeGGY6kbal9JISNwJ1R68lYFnRbwCBWmK0utuLOfxAtirmCVrwd0g2O79x70VYFqcao1gS/sxHhqkrtcGdrRHUtHVK0ZHx396kbSiH2lVb0lefl8+VuVomlVd0kbceXz5W5FRkK0Whw/1dWnhJ+8cqwwxOlkaxozJKtBonZyOArZH70P+2V55jnh7jHaa9fwmoKWsmtZLWVeDjiq+aUvPi4/N/YCPxKAGlDz3uPzf2AsGo8XW2b+8/SK9SNeiE/kf9Kk9iCaNeiM/kh9Kk9iwafzdLePb/qZuTbty9OKbdtW++WB7T5Wa0lotzNr/AC5i3r2kNH1FEfDlEbZh620JG2CljY7qzdqjP15oT3X8sNMMcMfl0tJK1j3bxycRzd4uzHejQ5FMzdIcFhZlO0cEkQ4zoN4KM6RcOfhJhuaGFoNZTnlqc9ZcBtb3jPvyUmZ0G8F6ByQV+0ZYtOF726Gtc5tvqiGVGef4tw3Py7M8j2KxTHtc0OY4OaQCCDmCED9LeDDRVL7/AGyL+izOzq2NH9k8+64H1HivWjDSILU2Oy32U8yzyp6lxz5D4rvi/Vw3RRyaVWHSN593z5W5Waje17WuY4Oa4AgtOYIVdMY0okx5e5njyW1btXipe0VjmWXBhtmyRSrkW2l5CPXeByjvUFYfRgcsFW/9f7ZQDO/ejxozOWCrf+v9srWw2m2TmXa3LDXBpa0r8Sl2ss6yZBWS5bTgHC5APScc8bXH5v7AR31kB9Jhzxrcfm/sBYNR4uts395+kWRp0SH8kfpUnsQX6kZdEx/JL6VJ7Fh0/m6W7+3/AFM3FR/G9+ZhzDlXX6w5YN1Kce+kd0fae5d0negviSpl0k43gs9tkd/JFCTrzN3ZbNd/flqt/wDq3ny7q6FLC6mt9Rfqtp5aszjhLt/Jg5l3e76kSivFNTw0lNFTU0YjhhYGRsG5rRuC9nciGZukOCSU3SHBJA6zoN4LKwzoN4LKDzLHHNE+KdjJInjVex4zDh6CgdpD0ez2J0lxtLHT2s7XM3vp+Ppb2+KOLiQMwM8urrSY9sjDq5OYdhBHiCgr/gvSFdMMFtO4mstuf+7yuObB8Q9XDci1YL7grFL+Uhp7eK2U6z4KunjbMXde/pcQSuHjHRXRXR0lZYpGUVW4kugI/FSHs96fV2IRX3D91sUwhutFLBtya8jNjuDhsKnD1Fpr6xKzn4P2T8zW7/Ks+5b9NBBSwthpYYoIm9GOJga0cAFWK043xLaQG0l3qOTH93K7lG+Ds1JKbTJiOJobNBQTdpjc0nwKRELN7T3kftZZ1kB5NNN8Iyjt9vYfTk8/xLkXDSpiytBDK6OlaeqmiDT4nMqvKwlzudDaqc1Fyq4KWEe7meGg9g9JXPo4sP4ipmXWGioauOfdNJTtLnZbNuYz6lV2urauvmM9dUzVEh93M8uPrRZ0EXeo1a60yRyups+Wil1SWMdsDm57hnsOXYVOOViZjtImmwWT8z27/Ks+5bVLTU1HFyVHTw08WZOpDGGDPr2Be3vDWlziA0DMknIAIa4kxtWX2rdh/ArDUTyDVnr2khkTdx1T1fpeGaREQs3vb0mS0jYtqaqpGE8Ma01wqTqVEkRz5MdbAeo+k9Q9UlwThamwpaRTR6slXLk6pnA6buoDsGezvTOCsHUeFqZztYVFxmH4+pcNu3eG+gfX6lJVXhlYO5JI7kDM3SHBJKbpDgkgdZ0G8FlOto6kNA5vLuHUs8zqfgJfBFMpiamDzykbzFNu1wMwewjrH+gQt3mdT8BL4Jc0qfgJfBBy3V0tKMrhA5rf+4haXxnjltb3jLtW0yWlr6Y6r4amnfvyye13sW1zSo+Ak8Fz6rDcNRIZuZzU85OZnpXOhkJ7XMyJ781BHbpo2wtcnOfzF1LKd7qWQsH7O1vqUcq9DFE/Pmd4qGDqEsQfl4EKfOsl/hB5ldJnHqFdSNkA726pTD6fG0QAjpLNU+kkzRZ92TvrQDr+ZOfPZfosvTzU/wDst2k0L0bcueXmd/pEUIbn4kqZvbj0jyLNZm9pqZT/AApk2rSBVNPLV1roQeqlpJJSO9+SDWtmjXClrAldRuqns/vKuQlo7tjfEL1dceWCzNbQ2wc/qW+SyjtzA7I+jMbB6ysnRzNXScpiC7Xm6Z74XycnFn+iN3cu/acMUVmYW2u0R02YAc6OIazuLt5QQaWy4qxq7WxHL/I1oJBFBCc5ZB8Y/f4KaWWzW+xUTaO1UzIIRtOW1zz6XHeSurzSo+Ak8EuaVHwEnggZST3NKj4CTwS5nU/AS+CoZSO5PczqfgJfBLmlT8BL4INObpDgktiWiqSRlTy7vQkglSSSSgSw45JJINGhqZJZq1ryCIqjUZs3DUafrJTNvr5qisnik1dVg2ZD/Fkb9TAkkg2K6qkggD48szNGzaOp0gafUV5uNTLDStfGQHGVjc8uoyNB9RWUkG1rHJJryd+SSSDmXq4zUNXQRQhhbUPkD9YbtWMuGXeFwRia4eQPxO1hJOp15uGe/wCKFlJA9R4grqmYRuMbQWxnNrdozaCd/FeGYkrjMW5Q5Cct6HVm0Zb+1JJB1LHc6it5ET6m1kpOqMsy14A9S7qSSBJJJIMJJJIP/9k=",
  },
  {
    id: 4,
    name: "",
    rating: 5,
    review:
      "Bouquet mil gaya, bohat hi cute aur pyara tha 💐🍫Thank you Bloom Envy hamesha ki tarah perfect! 💕",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRpyM8klDYwnhznIs7IodY1a6-WiCmmGC4w&s",
  },
  {
    id: 5,
    name: "Sufyan",
    rating: 5,
    review:
      "It arrived on time and looked so pretty! Totally loved it.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRpyM8klDYwnhznIs7IodY1a6-WiCmmGC4w&s",
  },
];

const ReviewCard = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-purple-50 py-20 px-6">
     <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-gradient-to-r from-pink-700 via-pink-600 to-[#4b1248] bg-clip-text mb-6 tracking-tight relative inline-block after:content-[''] after:absolute after:w-28 after:h-[3px] after:bg-pink-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-3 after:rounded-full">
   Customer Love 💕
</h2>

      <p className="text-center text-gray-500 mb-12 text-sm">
        Hear what our happy customers say about Bloom Envy
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-3xl shadow-lg p-6 max-w-sm w-full border border-pink-200 hover:shadow-pink-300 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-4 border-pink-300 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-0 right-0 w-3 h-3 bg-pink-400 rounded-full ring-2 ring-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(review.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">
                    {review.rating.toFixed(1)} / 5
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed italic border-l-4 pl-4 border-pink-300">
              “{review.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewCard;
