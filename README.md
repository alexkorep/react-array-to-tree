# react-array-to-tree
Make a nested tree of React components out of a flat array

If you have a React application with multiple contexts you might end up with
a deep nested tree of context providers, something like this:

```
const AppWithProviders = () => (
  <ThemeContext.Provider param1={value1}>
    <UserContext.Provider>
      <SomeOtherContext.Provider param2={value2} param3={value3}>
        <YetAnotherContext.Provider>
          <OneMoreContext.Provider>
            <AndOneMoreContext.Provider>
              <AndSoOnContext.Provider>
                <AndSoForthContext.Provider>
                  <App/>
                <AndSoForthContext.Provider>
              </AndSoOnContext.Provider>
            </AndOneMoreContext.Provider>
          </OneMoreContext.Provider>
        </YetAnotherContext.Provider>
      </YetAnotherContext.Provider>
    </UserContext.Provider>
  </ThemeContext.Provider>
)
```

To make the structure more flat you can use this library:

```
import ReactArrayToTree from 'react-array-to-tree';

const Providers = ReactArrayToTree([
  [ThemeContext.Provider, {param1: value1}],
  [UserContext.Provider],
  [SomeOtherContext.Provider, {param2: value2, param3: value3}],
  [YetAnotherContext.Provider],
  [OneMoreContext.Provider],
  [AndOneMoreContext.Provider],
  [AndSoOnContext.Provider],
  [AndSoForthContext.Provider],
]);

const AppWithProviders = () => (
  <Providers>
    <App/>
  </Providers>
);
```
