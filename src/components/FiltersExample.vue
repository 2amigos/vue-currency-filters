<template>
    <div class="container">
      <div class="row row--center">
        <label>App currency</label>
        <select @change="onCurrencyChanged">
          <option>{{ $constants.EUR_SYMBOL }}</option>
          <option>{{ $constants.USD_SYMBOL }}</option>
        </select>
      </div>
      <div class="row row--center">
        <input type="number" class="main-input" v-model="value"/>
      </div>
      <div class="row row--space-between row-gray">
        <span class="row-item">Bitcoin</span>
        <input class="row-item" :value="cryptoValue" readonly/>
      </div>
      <div class="row row--space-between">
        <span class="row-item">Ethereum</span>
        <input class="row-item" :value="cryptoValueEthereum" readonly/>
      </div>
      <div class="row row--space-between row-gray">
        <span class="row-item">Currency</span>
        <input class="row-item" :value="value | currency" readonly/>
      </div>
      <div class="row row--space-between ">
        <span class="row-item">Plus one</span>
        <input class="row-item" :value="value | toBigNumber | bnPlus(1) | bnRemoveTrailingZeros" readonly/>
      </div>
      <div class="row row--space-between row-gray">
        <span class="row-item">Multiplied by three</span>
        <input class="row-item" :value="value | toBigNumber | bnMultiply(3) | bnRemoveTrailingZeros" readonly/>
      </div>
      
    </div>
</template>

<script>
import { crypto } from '@/filters/currency';

export default {
  name: 'FiltersExample',
  data() {
    return {
      value: '',
    };
  },
  computed: {
    cryptoValue() {
      return `${crypto(this.value)} BTC`;
    },
    cryptoValueEthereum() {
      return `${crypto(this.value, 'ETH')} ETH`;
    },
  },
  methods: {
    onCurrencyChanged(event) {
      localStorage.setItem('User/selectedCurrency', event.target.value);
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  margin-right: 12px;
}

input {
  transition: border-color 300ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 0.063rem;
  background-color: #ffffff;
  border-color: #d6d6d2;
  color: #1c1f27;
}

.main-input {
  width: 500px;
  height: 50px;
  padding: 4px;
  font-size: 32px;
}

.container {
  display: flex; /* or inline-flex */
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  .row {
    display: flex;
    flex-direction: row;
    padding: 24px 0;

    &--center {
      justify-content: center;
    }

    &--space-between {
      justify-content: space-between;
    }

    &-item {
      padding: 5px;
    }

    &-gray {
      background: #e6e6e6;
    }
  }
}
</style>
