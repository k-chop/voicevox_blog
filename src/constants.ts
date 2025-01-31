import { CharacterKey } from "./types/dormitoryCharacter"

export const APP_VERSION = "0.13.4"

export const characterKeys: CharacterKey[] = [
  "四国めたん",
  "ずんだもん",
  "春日部つむぎ",
  "雨晴はう",
  "波音リツ",
  "玄野武宏",
  "白上虎太郎",
  "青山龍星",
  "冥鳴ひまり",
  "九州そら",
  "モチノキョウコ",
  "剣崎雌雄",
  "WhiteCUL",
  "後鬼",
  "No7",
  "ちび式じい",
  "櫻歌ミコ",
  "小夜_SAYO",
  "ナースロボ＿タイプＴ",
]

export type CharacterInfoEntry = {
  name: string
  id: string
  policyUrl?: string
}

// NOTE:
// このデータの一部を gatsby-node.ts の sourceNodes 内でgraphqlへ登録しています
// （実際に登録されるデータは gatsby-node.ts を参照）
// npm run develop中にこれを書き換えた場合は再起動しないとgraphqlに反映されないので注意
export const characterInfos: {
  [key in CharacterKey]: CharacterInfoEntry
} = {
  四国めたん: {
    name: "四国めたん",
    id: "shikoku_metan",
    policyUrl: "https://zunko.jp/con_ongen_kiyaku.html",
  },
  ずんだもん: {
    name: "ずんだもん",
    id: "zundamon",
    policyUrl: "https://zunko.jp/con_ongen_kiyaku.html",
  },
  春日部つむぎ: {
    name: "春日部つむぎ",
    id: "kasukabe_tsumugi",
    policyUrl: "https://tsumugi-official.studio.site/rule",
  },
  雨晴はう: {
    name: "雨晴はう",
    id: "amehare_hau",
    policyUrl: "https://amehau.com/?page_id=225",
  },
  波音リツ: {
    name: "波音リツ",
    id: "namine_ritsu",
    policyUrl: "http://canon-voice.com/kiyaku.html",
  },
  玄野武宏: {
    name: "玄野武宏",
    id: "kurono_takehiro",
    policyUrl: "https://virvoxproject.wixsite.com/official/voicevoxの利用規約",
  },
  白上虎太郎: {
    name: "白上虎太郎",
    id: "shirakami_kotarou",
    policyUrl: "https://virvoxproject.wixsite.com/official/voicevoxの利用規約",
  },
  青山龍星: {
    name: "青山龍星",
    id: "aoyama_ryusei",
    policyUrl: "https://virvoxproject.wixsite.com/official/voicevoxの利用規約",
  },
  冥鳴ひまり: {
    name: "冥鳴ひまり",
    id: "meimei_himari",
    policyUrl: "https://meimeihimari.wixsite.com/himari/terms-of-use",
  },
  九州そら: {
    name: "九州そら",
    id: "kyushu_sora",
    policyUrl: "https://zunko.jp/con_ongen_kiyaku.html",
  },
  モチノキョウコ: {
    name: "もち子さん",
    id: "mochikosan",
    policyUrl: "https://vtubermochio.wixsite.com/mochizora/利用規約",
  },
  剣崎雌雄: {
    name: "剣崎雌雄",
    id: "kenzaki_mesuo",
    policyUrl: "https://frontier.creatia.cc/fanclubs/413/posts/4507",
  },
  WhiteCUL: {
    name: "WhiteCUL",
    id: "white_cul",
    policyUrl: "https://www.whitecul.com/guideline",
  },
  後鬼: {
    name: "後鬼",
    id: "goki",
    policyUrl: "https://ついなちゃん.com/voicevox_terms/",
  },
  No7: {
    name: "No.7",
    id: "number_seven",
    policyUrl: "https://voiceseven.com/#j0200",
  },
  ちび式じい: {
    name: "ちび式じい",
    id: "chibishikiji",
    policyUrl:
      "https://docs.google.com/presentation/d/1AcD8zXkfzKFf2ertHwWRwJuQXjNnijMxhz7AJzEkaI4",
  },
  櫻歌ミコ: {
    name: "櫻歌ミコ",
    id: "ouka_miko",
    policyUrl: "https://voicevox35miko.studio.site/rule",
  },
  小夜_SAYO: {
    name: "小夜/SAYO",
    id: "sayo",
    policyUrl: "https://316soramegu.wixsite.com/sayo-official/guideline",
  },
  ナースロボ＿タイプＴ: {
    name: "ナースロボ＿タイプＴ",
    id: "nurserobo_typet",
    policyUrl: "https://www.krnr.top/rules",
  },
}
