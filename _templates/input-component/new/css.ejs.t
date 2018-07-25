---
to: src/views/<%= h.inflection.camelize(name.replace(/\s/g, '_')) %>/<%= h.inflection.dasherize(name.toLowerCase()) %>.css
---
.<%= h.inflection.dasherize(name.toLowerCase()) %> {
  display: flex;
  flex-direction: column-reverse;
  label {
    &::after {
      margin-left: 0.5em;
    }
  }
  input {
    &:focus {
      background-color: rgb(212, 231, 255);
      & + label {
        color: blue;
        &:after {
          content: "↻";
        }
      }
    }
    &:not(:placeholder-shown):invalid {
      background-color: rgb(255, 236, 236);
      & + label {
        color: red;
        &:after {
          content: "✗";
        }
      }
    }
    &:valid {
      background-color: rgb(218, 255, 240);
      & + label {
        color: rgb(26, 230, 145);
        &:after {
          content: "✓";
        }
      }
    }
  }
}
 