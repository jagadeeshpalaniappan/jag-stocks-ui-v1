import { get, toNumber } from 'lodash-es';
import { _getHistoryKey, getStockTableData } from './utils';

const apiData = [
  {
    id: '5fde5feaaa32ed44944e82a3',
    stockId: 'AMC',
    name: 'AMC Entertainment Holdings, Inc',
    yf: {
      '2020-12': {
        name: 'AMC Entertainment Holdings, Inc',
        rating: 3.4,
        dividendYield: '',
        numberOfAnalystOpinions: 7,
        targetLowPricev: 1,
        targetHighPrice: 3.5,
        trend: [
          {
            period: '0m',
            strongBuy: 3,
            buy: 6,
            hold: 6,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 0,
            buy: 0,
            hold: 6,
            sell: 2,
            strongSell: 1
          },
          {
            period: '-2m',
            strongBuy: 0,
            buy: 0,
            hold: 6,
            sell: 2,
            strongSell: 1
          },
          {
            period: '-3m',
            strongBuy: 3,
            buy: 6,
            hold: 6,
            sell: 1,
            strongSell: 0
          }
        ],
        createdAt: 1608408715998,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 9,
        buy: 0,
        sell: 33,
        hold: 67,
        createdAt: 1608408715495,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    updatedAt: '2020-12-19T20:17:46.811Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a2',
    stockId: 'AGNC',
    name: 'AGNC Investment Corp.',
    yf: {
      '2020-12': {
        name: 'AGNC Investment Corp.',
        rating: 2,
        dividendYield: 9.34,
        numberOfAnalystOpinions: 14,
        targetLowPricev: 15,
        targetHighPrice: 16.5,
        trend: [
          {
            period: '0m',
            strongBuy: 0,
            buy: 1,
            hold: 7,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 3,
            buy: 6,
            hold: 3,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 3,
            buy: 6,
            hold: 3,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 0,
            buy: 1,
            hold: 6,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408712250,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 13,
        buy: 77,
        sell: 0,
        hold: 23,
        createdAt: 1608408711925,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    updatedAt: '2020-12-19T20:17:46.811Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a1',
    stockId: 'ABBV',
    name: 'AbbVie Inc.',
    yf: {
      '2020-12': {
        name: 'AbbVie Inc.',
        rating: 2,
        dividendYield: 4.98,
        numberOfAnalystOpinions: 21,
        targetLowPricev: 97,
        targetHighPrice: 135,
        trend: [
          {
            period: '0m',
            strongBuy: 4,
            buy: 6,
            hold: 10,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 6,
            buy: 11,
            hold: 5,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 5,
            buy: 9,
            hold: 5,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 1,
            buy: 3,
            hold: 10,
            sell: 1,
            strongSell: 1
          }
        ],
        createdAt: 1608408708186,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 20,
        buy: 70,
        sell: 0,
        hold: 30,
        createdAt: 1608408707873,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/c51b1ef9-a60d-4536-a17a-5f7b921a20ab?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUZ7TCN5OO&Signature=zlznHhSkFhyL1Ku6xim%2F9j2Unbw%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCffVQdq0E3BxkpSTiKtAfi%2BdpqZubhKONPFPodv%2FQF%2BzlEuRWePTbJwV3IMrRV%2Botc6xUEnABxXKnqSmPLbkn03cniUi%2Bu8LKwoXcbaUWLt6CKIqO1G94vJ4IVxT6YqkMryIXdsZC9Hnu7eoWKI0H77T8zFwGC7KTbL8kkQl1cjfp%2FVAUxxiQ8apmv%2B4V0xol4mBcyhxgg2DrTBJoSA3WA8fSLXNEJlYa%2Bt8VYhDgF%2BR9R3mL3j%2BKlXyXpwKO66%2Bf4FMi0zwVgzt2ySYGPvNqWf5Eu3Er8TsuTv2Uc9cupmedqxrWK8ybVLExzDykZr35c%3D&Expires=1608409609',
        economic_moat: 'narrow',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '97.0000',
          amount: '97.0000'
        },
        id: '607f9be3-7ec4-4b31-b0e3-649318f5fd00',
        instrument_id: '279e98b9-2e23-4cf2-90ed-c085ea472105',
        report_published_at: '2020-11-20T13:20:00Z',
        report_title:
          'AbbVie’s Growing Portfolio Should Help Mitigate Eventual U.S. Biosimilar Humira Competition',
        report_updated_at: '2020-12-05T00:44:04Z',
        star_rating: '3',
        stewardship: 'standard',
        uncertainty: 'medium',
        updated_at: '2020-11-05T01:05:39Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.811Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a4',
    stockId: 'ARCC',
    name: 'Ares Capital Corporation - Clos',
    yf: {
      '2020-12': {
        name: 'Ares Capital Corporation - Clos',
        rating: 1.7,
        dividendYield: 9.66,
        numberOfAnalystOpinions: 15,
        targetLowPricev: 15.5,
        targetHighPrice: 19.25,
        trend: [
          {
            period: '0m',
            strongBuy: 4,
            buy: 6,
            hold: 4,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 7,
            buy: 8,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 6,
            buy: 8,
            hold: 1,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 4,
            buy: 6,
            hold: 4,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408719000,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 14,
        buy: 93,
        sell: 0,
        hold: 7,
        createdAt: 1608408719133,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    updatedAt: '2020-12-19T20:17:46.811Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a5',
    stockId: 'ATVI',
    name: 'Activision Blizzard, Inc',
    yf: {
      '2020-12': {
        name: 'Activision Blizzard, Inc',
        rating: 2,
        dividendYield: 0.45,
        numberOfAnalystOpinions: 32,
        targetLowPricev: 73,
        targetHighPrice: 110,
        trend: [
          {
            period: '0m',
            strongBuy: 9,
            buy: 11,
            hold: 7,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 8,
            buy: 20,
            hold: 4,
            sell: 0,
            strongSell: 1
          },
          {
            period: '-2m',
            strongBuy: 9,
            buy: 19,
            hold: 3,
            sell: 0,
            strongSell: 1
          },
          {
            period: '-3m',
            strongBuy: 8,
            buy: 13,
            hold: 3,
            sell: 1,
            strongSell: 0
          }
        ],
        createdAt: 1608408722971,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 31,
        buy: 87,
        sell: 3,
        hold: 10,
        createdAt: 1608408722012,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/35628fb0-8065-4442-a67f-9a5740946fcc?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUY2MEZVTY&Signature=98fQiQqbqKAZnQjCgtYRcOIb35M%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDN8UVwmnnjNJ2Jc8vyKtARIbjAnGzXaRTCyLwc%2BTWyOfQhiDAq6Wr46AUjWsVwaqLODLPyIw95R6zPoiIE%2FFKzIcqH0UeGTMS7lnPWfCVL3NRmkhB7WKCIpAysVYGq%2FaMt%2FJyc0YWnH%2BHQ%2BdeJ5xwkfuykO2XSWcBJ4tZ3TkGEOmwMrufdZRJN2oPSxwXz7%2BnZjarvAc%2F2frmGF71lJGhTVYuIsdAfxUm0yLbr3nEI2DAQtHDjRKkHgbO68HKOW6%2Bf4FMi0a5YTkS%2BwgxQ1SFsKme%2F4BlYDueHas3SR1JkP9ZrKBeQ5nb1rS%2BT07D08SA90%3D&Expires=1608409621',
        economic_moat: 'narrow',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '73.0000',
          amount: '73.0000'
        },
        id: '1c1ce7f4-4176-455a-8b52-d0949d3ad625',
        instrument_id: '93ec8a9c-d587-4867-9996-67733ec86980',
        report_published_at: '2020-04-13T16:02:00Z',
        report_title:
          'Activision Blizzard Will Continue to Benefit From Secular Trend Toward Digital Downloads',
        report_updated_at: '2020-12-15T17:55:22Z',
        star_rating: '2',
        stewardship: 'standard',
        uncertainty: 'high',
        updated_at: '2020-12-16T00:01:50Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.811Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a6',
    stockId: 'AVGO',
    name: 'Broadcom Inc.',
    yf: {
      '2020-12': {
        name: 'Broadcom Inc.',
        rating: 1.9,
        dividendYield: 3.31,
        numberOfAnalystOpinions: 28,
        targetLowPricev: 392,
        targetHighPrice: 500,
        trend: [
          {
            period: '0m',
            strongBuy: 10,
            buy: 17,
            hold: 2,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 7,
            buy: 19,
            hold: 5,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 7,
            buy: 19,
            hold: 6,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 10,
            buy: 24,
            hold: 1,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408726773,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 32,
        buy: 84,
        sell: 0,
        hold: 16,
        createdAt: 1608408725954,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/29ede265-b78f-43b5-a118-0d80b02ba246?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUY2MEZVTY&Signature=6jlrpJ5tttn3%2B8Lmad3buu8D4qg%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDN8UVwmnnjNJ2Jc8vyKtARIbjAnGzXaRTCyLwc%2BTWyOfQhiDAq6Wr46AUjWsVwaqLODLPyIw95R6zPoiIE%2FFKzIcqH0UeGTMS7lnPWfCVL3NRmkhB7WKCIpAysVYGq%2FaMt%2FJyc0YWnH%2BHQ%2BdeJ5xwkfuykO2XSWcBJ4tZ3TkGEOmwMrufdZRJN2oPSxwXz7%2BnZjarvAc%2F2frmGF71lJGhTVYuIsdAfxUm0yLbr3nEI2DAQtHDjRKkHgbO68HKOW6%2Bf4FMi0a5YTkS%2BwgxQ1SFsKme%2F4BlYDueHas3SR1JkP9ZrKBeQ5nb1rS%2BT07D08SA90%3D&Expires=1608409626',
        economic_moat: 'narrow',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '350.0000',
          amount: '350.0000'
        },
        id: '9beee408-b222-41e8-bf2c-99b821374be4',
        instrument_id: '698f04e6-1710-4f34-b7af-4a88fe5e47b3',
        report_published_at: '2020-12-11T03:23:00Z',
        report_title:
          "Broadcom's Broad Product Portfolio Spans Semiconductors and Infrastructure Software",
        report_updated_at: '2020-12-14T00:32:16Z',
        star_rating: '2',
        stewardship: 'standard',
        uncertainty: 'medium',
        updated_at: '2020-12-12T00:08:00Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a7',
    stockId: 'BABA',
    name: 'Alibaba Group Holding Limited',
    yf: {
      '2020-12': {
        name: 'Alibaba Group Holding Limited',
        rating: 1.6,
        dividendYield: '',
        numberOfAnalystOpinions: 47,
        targetLowPricev: 220.63,
        targetHighPrice: 393.34,
        trend: [
          {
            period: '0m',
            strongBuy: 18,
            buy: 29,
            hold: 1,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 19,
            buy: 29,
            hold: 1,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 19,
            buy: 30,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 19,
            buy: 30,
            hold: 0,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408729287,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 56,
        buy: 96,
        sell: 0,
        hold: 4,
        createdAt: 1608408730193,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/b263befd-318a-42f1-8e78-7d5961592f4c?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUX5DPOSNO&Signature=2pNdA8PgqQ1XOt5cYXhAFbeXqUg%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDKAcGq%2BvAA3kPgRSMCKtAfLCZnvdhYzcuX5QdrLamAQk81oAONwhJs74uxcRidH%2FrpHsrLmSMuzEEDPoHvMA%2FCux%2B0HUjauIuzdcGiWbwN%2BtWR2%2FgqqQTU%2BjsgKRZg9Mipf25GHkpCIiLQ29t9KKHyr3%2B3AY4TR1MCdyEWUlZLs7xMWPOhIDNLSGhiJRq%2F2VXmIW0jjlIlSUQ6ueP9mqZuTE8L4tSYVeZxWMu1FugSi48bF6eSve3j3uImfJKMm6%2Bf4FMi2UPC6vMLmvdaNu37rJIC0DNOlPQoR5eR5CWoHc85E4zKFBXP5dqB0HLrSArwI%3D&Expires=1608409629',
        economic_moat: 'wide',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '296.0000',
          amount: '296.0000'
        },
        id: 'c572683f-758e-4a52-afde-d5516db4e012',
        instrument_id: 'b2e06903-5c44-46a4-bd42-2a696f9d68e1',
        report_published_at: '2020-04-23T13:08:00Z',
        report_title:
          'Alibaba Reported Soft September Quarter Result While Outlook Remains Solid; FVE Raised by 4%',
        report_updated_at: '2020-12-05T00:44:58Z',
        star_rating: '3',
        stewardship: 'poor',
        uncertainty: 'high',
        updated_at: '2020-11-07T00:12:18Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a8',
    stockId: 'BKR',
    name: 'Baker Hughes Company',
    yf: {
      '2020-12': {
        name: 'Baker Hughes Company',
        rating: 2,
        dividendYield: 3.35,
        numberOfAnalystOpinions: 26,
        targetLowPricev: 17.5,
        targetHighPrice: 32,
        trend: [
          {
            period: '0m',
            strongBuy: 0,
            buy: 0,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 7,
            buy: 18,
            hold: 4,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 7,
            buy: 17,
            hold: 6,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 7,
            buy: 14,
            hold: 6,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408732651,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 29,
        buy: 83,
        sell: 0,
        hold: 17,
        createdAt: 1608408733196,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/dcda25a0-b563-4bda-a57d-f22de6febd52?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUY2MEZVTY&Signature=QdOmTevOFuBR393IJ8z266KSz5Q%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDN8UVwmnnjNJ2Jc8vyKtARIbjAnGzXaRTCyLwc%2BTWyOfQhiDAq6Wr46AUjWsVwaqLODLPyIw95R6zPoiIE%2FFKzIcqH0UeGTMS7lnPWfCVL3NRmkhB7WKCIpAysVYGq%2FaMt%2FJyc0YWnH%2BHQ%2BdeJ5xwkfuykO2XSWcBJ4tZ3TkGEOmwMrufdZRJN2oPSxwXz7%2BnZjarvAc%2F2frmGF71lJGhTVYuIsdAfxUm0yLbr3nEI2DAQtHDjRKkHgbO68HKOW6%2Bf4FMi0a5YTkS%2BwgxQ1SFsKme%2F4BlYDueHas3SR1JkP9ZrKBeQ5nb1rS%2BT07D08SA90%3D&Expires=1608409633',
        economic_moat: 'none',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '26.0000',
          amount: '26.0000'
        },
        id: '939b302c-2a1c-4650-b6e0-f2967619b1e7',
        instrument_id: '9a39150c-b9c2-434a-bdf0-f91bf2160574',
        report_published_at: '2020-09-29T14:21:00Z',
        report_title:
          "Baker Hughes Should Be Able to Endure COVID-19's Disruption of Oil Markets",
        report_updated_at: '2020-12-18T17:45:16Z',
        star_rating: '4',
        stewardship: 'standard',
        uncertainty: 'high',
        updated_at: '2020-12-19T00:00:45Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82a9',
    stockId: 'BP',
    name: 'BP p.l.c.',
    yf: {
      '2020-12': {
        name: 'BP p.l.c.',
        rating: 2.2,
        dividendYield: 5.8,
        numberOfAnalystOpinions: 10,
        targetLowPricev: 17,
        targetHighPrice: 36,
        trend: [
          {
            period: '0m',
            strongBuy: 2,
            buy: 3,
            hold: 4,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 3,
            buy: 4,
            hold: 4,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 3,
            buy: 4,
            hold: 4,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 2,
            buy: 3,
            hold: 4,
            sell: 1,
            strongSell: 0
          }
        ],
        createdAt: 1608408734861,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 29,
        buy: 62,
        sell: 10,
        hold: 28,
        createdAt: 1608408739737,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/6b7ec253-570e-44a3-ba35-035f081393e6?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUY2MEZVTY&Signature=j61pIOwdT4F54WceKp55jfafs7M%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDN8UVwmnnjNJ2Jc8vyKtARIbjAnGzXaRTCyLwc%2BTWyOfQhiDAq6Wr46AUjWsVwaqLODLPyIw95R6zPoiIE%2FFKzIcqH0UeGTMS7lnPWfCVL3NRmkhB7WKCIpAysVYGq%2FaMt%2FJyc0YWnH%2BHQ%2BdeJ5xwkfuykO2XSWcBJ4tZ3TkGEOmwMrufdZRJN2oPSxwXz7%2BnZjarvAc%2F2frmGF71lJGhTVYuIsdAfxUm0yLbr3nEI2DAQtHDjRKkHgbO68HKOW6%2Bf4FMi0a5YTkS%2BwgxQ1SFsKme%2F4BlYDueHas3SR1JkP9ZrKBeQ5nb1rS%2BT07D08SA90%3D&Expires=1608409637',
        economic_moat: 'none',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '35.0000',
          amount: '35.0000'
        },
        id: '2be4a155-c521-4b2d-9428-b8eb30d7c1a9',
        instrument_id: 'fb5c5151-e89b-4e9f-82ad-a51178c18e75',
        report_published_at: '2020-11-26T16:51:00Z',
        report_title:
          'BP Jump-Starts Move Away From Oil; Lower FVE and Downgrade Moat on Uncertainty',
        report_updated_at: '2020-12-05T01:03:52Z',
        star_rating: '4',
        stewardship: 'standard',
        uncertainty: 'high',
        updated_at: '2020-12-05T00:04:46Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82aa',
    stockId: 'BXP',
    name: 'Boston Properties, Inc.',
    yf: {
      '2020-12': {
        name: 'Boston Properties, Inc.',
        rating: 2.5,
        dividendYield: 4.08,
        numberOfAnalystOpinions: 18,
        targetLowPricev: 75,
        targetHighPrice: 146,
        trend: [
          {
            period: '0m',
            strongBuy: 2,
            buy: 5,
            hold: 15,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 3,
            buy: 6,
            hold: 10,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 3,
            buy: 7,
            hold: 8,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 2,
            buy: 5,
            hold: 15,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408742677,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 19,
        buy: 58,
        sell: 0,
        hold: 42,
        createdAt: 1608408745660,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/9407a674-b231-4191-ac17-3b1b7d6e615c?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUYKFESZAG&Signature=NiAyrJGLujBMbVuwc%2F5X4NVnq6Y%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDDy8gOft87Gpsk5A7CKtAXlr620%2BPBZRA59KYrVwV2uMqdPw52aYhnJ2MP%2FbMMjuGq%2FegH%2Bd6UZrvxnB%2BSl3fOOajEnZOO0uiZi8CbcgRlUoX4Ilc7xuOf7D8DxeokWf8TReV9%2FedzMkypiEMrc4gVk7ahQA%2FhB4zw%2FLbMcelUtkbiquCXYSah2Lq0TCWuqFOVyaSzXj17HoI%2F3k%2B%2B8uSK2UwtdhCZmC1WnQCDkO%2FOISNJ0I4XDqBo%2BgXf4LKOG6%2Bf4FMi2gN9QR%2FivktwPcRuF8gRmEC1gXezNIB9zp8myq5dOUncahD0EenHw9VVdENsY%3D&Expires=1608409643',
        economic_moat: 'none',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '103.0000',
          amount: '103.0000'
        },
        id: 'b3ac5087-6d55-41d2-8c77-6edffae05823',
        instrument_id: '4ad4f8c0-bc8e-4937-940e-e5cc5d3b21ed',
        report_published_at: '2020-10-29T09:43:00Z',
        report_title:
          'Boston Properties Struggles to Generate Growth Amid a Tough Office Real Estate Market',
        report_updated_at: '2020-12-05T00:53:02Z',
        star_rating: '3',
        stewardship: 'exemplary',
        uncertainty: 'high',
        updated_at: '2020-11-21T01:08:38Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82ab',
    stockId: 'CODX',
    name: 'Co-Diagnostics, Inc.',
    yf: {
      '2020-12': {
        name: 'Co-Diagnostics, Inc.',
        rating: 2,
        dividendYield: '',
        numberOfAnalystOpinions: 3,
        targetLowPricev: 20,
        targetHighPrice: 43,
        trend: [
          {
            period: '0m',
            strongBuy: 0,
            buy: 0,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 0,
            buy: 3,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 0,
            buy: 3,
            hold: 0,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 0,
            buy: 0,
            hold: 0,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408748953,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    rhg: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82ac',
    stockId: 'CPE',
    name: 'Callon Petroleum Company',
    yf: {
      '2020-12': {
        name: 'Callon Petroleum Company',
        rating: 3,
        dividendYield: '',
        numberOfAnalystOpinions: 16,
        targetLowPricev: 5,
        targetHighPrice: 16.5,
        trend: [
          {
            period: '0m',
            strongBuy: 9,
            buy: 13,
            hold: 3,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 1,
            buy: 2,
            hold: 11,
            sell: 2,
            strongSell: 1
          },
          {
            period: '-2m',
            strongBuy: 1,
            buy: 2,
            hold: 11,
            sell: 3,
            strongSell: 1
          },
          {
            period: '-3m',
            strongBuy: 8,
            buy: 13,
            hold: 5,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408751990,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 18,
        buy: 17,
        sell: 28,
        hold: 56,
        createdAt: 1608408754579,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        fetchStatus: 'NA'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82ad',
    stockId: 'CRM',
    name: 'Salesforce.com Inc',
    yf: {
      '2020-12': {
        name: 'Salesforce.com Inc',
        rating: 1.9,
        dividendYield: '',
        numberOfAnalystOpinions: 39,
        targetLowPricev: 170,
        targetHighPrice: 344,
        trend: [
          {
            period: '0m',
            strongBuy: 16,
            buy: 25,
            hold: 3,
            sell: 0,
            strongSell: 1
          },
          {
            period: '-1m',
            strongBuy: 12,
            buy: 21,
            hold: 5,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 12,
            buy: 23,
            hold: 3,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 15,
            buy: 25,
            hold: 3,
            sell: 0,
            strongSell: 2
          }
        ],
        createdAt: 1608408758161,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 42,
        buy: 88,
        sell: 2,
        hold: 10,
        createdAt: 1608408758800,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/b1633080-fe33-4d21-9ffd-ced42f133ae7?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHURWQLLOW7&Signature=Mw12KQGfNyBTK58SPUHc6z2I8aY%3D&x-amz-security-token=FwoGZXIvYXdzEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDK2wbj%2BBuKF0k4QnLSKtAXsz0dc1NTCSJiTK8KQYhrVvAFumnWE2AmEgN6m8SaQbTvjisFUkbHtkcuYIFNZNfa8MwGTxVC9Dygy%2BAiwZ%2BatGBTgfrR%2BeegjwAYXDqEaNVxhqtrH0VmB4TXLxia8LwLbr11E6NbZhDuhJVPjR%2BXn2jFW%2B8TmANFhsNVd1AlR%2FB%2B2%2BhpxyG%2FNPkuGsCvA%2F%2F5ib8dfwpol2KS%2BnQWb0gQ7BXN1FyrGHbER6Ftn4KPW4%2Bf4FMi1q8gMMTesT07Yelo9x1B%2BIla1ibPqW3wD2k86bUDssXefDk%2BifnC6jCjMAAog%3D&Expires=1608409656',
        economic_moat: 'wide',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '253.0000',
          amount: '253.0000'
        },
        id: 'd189683c-271d-47a0-8bcd-8eea68fc7795',
        instrument_id: 'cf1d849d-06f7-4374-9e84-13129713d0c7',
        report_published_at: '2020-12-02T04:48:00Z',
        report_title: 'Salesforce.com Is Building an Empire',
        report_updated_at: '2020-12-14T00:32:16Z',
        star_rating: '3',
        stewardship: 'standard',
        uncertainty: 'medium',
        updated_at: '2020-11-21T01:08:37Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82ae',
    stockId: 'CSCO',
    name: 'Cisco Systems, Inc.',
    yf: {
      '2020-12': {
        name: 'Cisco Systems, Inc.',
        rating: 2.4,
        dividendYield: 3.17,
        numberOfAnalystOpinions: 21,
        targetLowPricev: 41,
        targetHighPrice: 57,
        trend: [
          {
            period: '0m',
            strongBuy: 8,
            buy: 11,
            hold: 8,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 4,
            buy: 8,
            hold: 16,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 4,
            buy: 7,
            hold: 17,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 6,
            buy: 8,
            hold: 14,
            sell: 0,
            strongSell: 0
          }
        ],
        createdAt: 1608408763353,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 26,
        buy: 50,
        sell: 0,
        hold: 50,
        createdAt: 1608408763044,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/4aeaf2f4-8f31-40d6-8848-ece6fe397295?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHUZ7TCN5OO&Signature=eElQSmuiadvKX0XoqLtgt%2BuzZcA%3D&x-amz-security-token=FwoGZXIvYXdzEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDCffVQdq0E3BxkpSTiKtAfi%2BdpqZubhKONPFPodv%2FQF%2BzlEuRWePTbJwV3IMrRV%2Botc6xUEnABxXKnqSmPLbkn03cniUi%2Bu8LKwoXcbaUWLt6CKIqO1G94vJ4IVxT6YqkMryIXdsZC9Hnu7eoWKI0H77T8zFwGC7KTbL8kkQl1cjfp%2FVAUxxiQ8apmv%2B4V0xol4mBcyhxgg2DrTBJoSA3WA8fSLXNEJlYa%2Bt8VYhDgF%2BR9R3mL3j%2BKlXyXpwKO66%2Bf4FMi0zwVgzt2ySYGPvNqWf5Eu3Er8TsuTv2Uc9cupmedqxrWK8ybVLExzDykZr35c%3D&Expires=1608409661',
        economic_moat: 'narrow',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '48.0000',
          amount: '48.0000'
        },
        id: 'f8caa7c7-4661-40f4-bea7-c96545eb69b5',
        instrument_id: '8a9fe49d-5d0a-4040-a19b-f3f4df44408f',
        report_published_at: '2020-05-14T01:53:00Z',
        report_title:
          "Cisco Looks to Return to Growth as the Pandemic's Effects Wane",
        report_updated_at: '2020-12-09T17:54:06Z',
        star_rating: '3',
        stewardship: 'standard',
        uncertainty: 'medium',
        updated_at: '2020-12-10T00:03:01Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.812Z',
    __v: 0
  },
  {
    id: '5fde5feaaa32ed44944e82af',
    stockId: 'CVX',
    name: 'Chevron Corporation',
    yf: {
      '2020-12': {
        name: 'Chevron Corporation',
        rating: 2.3,
        dividendYield: 5.92,
        numberOfAnalystOpinions: 25,
        targetLowPricev: 90,
        targetHighPrice: 114,
        trend: [
          {
            period: '0m',
            strongBuy: 6,
            buy: 10,
            hold: 7,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-1m',
            strongBuy: 5,
            buy: 12,
            hold: 10,
            sell: 0,
            strongSell: 0
          },
          {
            period: '-2m',
            strongBuy: 5,
            buy: 11,
            hold: 9,
            sell: 1,
            strongSell: 0
          },
          {
            period: '-3m',
            strongBuy: 5,
            buy: 12,
            hold: 8,
            sell: 1,
            strongSell: 0
          }
        ],
        createdAt: 1608408766521,
        fetchStatus: 'COMPLETED'
      }
    },
    rh: {
      '2020-12': {
        nOfAnalysts: 26,
        buy: 65,
        sell: 4,
        hold: 31,
        createdAt: 1608408768850,
        fetchStatus: 'COMPLETED'
      }
    },
    rhg: {
      '2020-12': {
        download_url:
          'https://robinhood-midlands.s3.amazonaws.com/analyst_report_pdf/3de124c8-e25f-47d0-8f23-ec328cca1913?response-content-type=application%2Fpdf&AWSAccessKeyId=ASIAYTFIGNHURWQLLOW7&Signature=G%2FH%2BZsnMkIlturZh5N66Rxx8AY8%3D&x-amz-security-token=FwoGZXIvYXdzEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDK2wbj%2BBuKF0k4QnLSKtAXsz0dc1NTCSJiTK8KQYhrVvAFumnWE2AmEgN6m8SaQbTvjisFUkbHtkcuYIFNZNfa8MwGTxVC9Dygy%2BAiwZ%2BatGBTgfrR%2BeegjwAYXDqEaNVxhqtrH0VmB4TXLxia8LwLbr11E6NbZhDuhJVPjR%2BXn2jFW%2B8TmANFhsNVd1AlR%2FB%2B2%2BhpxyG%2FNPkuGsCvA%2F%2F5ib8dfwpol2KS%2BnQWb0gQ7BXN1FyrGHbER6Ftn4KPW4%2Bf4FMi1q8gMMTesT07Yelo9x1B%2BIla1ibPqW3wD2k86bUDssXefDk%2BifnC6jCjMAAog%3D&Expires=1608409665',
        economic_moat: 'narrow',
        fair_value: {
          currency_id: '1072fc76-1862-41ab-82c2-485837590762',
          currency_code: 'USD',
          value: '111.0000',
          amount: '111.0000'
        },
        id: '1838aeb9-5e63-4c8e-99e2-b8b812a75b27',
        instrument_id: '7a6a30e2-cf4d-40dd-8baa-0cea48de85e4',
        report_published_at: '2020-11-30T13:14:00Z',
        report_title:
          'Chevron Completes Noble Deal; Narrow Moat Unchanged As Shares Remain Undervalued',
        report_updated_at: '2020-12-05T00:49:02Z',
        star_rating: '4',
        stewardship: 'exemplary',
        uncertainty: 'high',
        updated_at: '2020-06-11T23:04:04Z',
        source: 'morningstar',
        fetchStatus: 'COMPLETED'
      }
    },
    updatedAt: '2020-12-19T20:17:46.813Z',
    __v: 0
  }
];

function getStock(stock, src, key) {
  const hisKey = _getHistoryKey();
  // check: fetchStatus: "COMPLETED"
  //   return stock[src] ? stock[src][hisKey] && stock[src][hisKey][key] : null;
  return get(stock, `${src}.${hisKey}.${key}`, null);
}

export const tableData = getStockTableData(apiData);

export const tableData11 = apiData.map((stock, idx) => ({
  stockId: stock.stockId,
  name: stock.name,
  yfRating: getStock(stock, 'yf', 'rating'),
  rhNOfAnalysts: getStock(stock, 'rh', 'nOfAnalysts'),
  rhBuy: getStock(stock, 'rh', 'buy'),
  rhHold: getStock(stock, 'rh', 'hold'),
  rhSell: getStock(stock, 'rh', 'sell'),
  rhgStarRating: getStock(stock, 'rhg', 'star_rating'),
  rhgStewardship: getStock(stock, 'rhg', 'stewardship'),
  rhgUncertainty: getStock(stock, 'rhg', 'uncertainty'),
  rhgFairVal: Number(getStock(stock, 'rhg', 'fair_value.value'))
}));
