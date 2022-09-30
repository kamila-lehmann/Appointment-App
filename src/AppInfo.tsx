import { FunctionComponent } from "react";

const AppInfo: FunctionComponent = () => {
  return (
    <article className="app-info">
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 80 80"
          style={{ fill: "#000000" }}
        >
          <path d="M 50 7 C 37.308594 7 27 17.308594 27 30 C 27 35.09375 28.664063 39.800781 31.472656 43.613281 L 27.226563 47.859375 C 26.886719 47.734375 26.53125 47.660156 26.171875 47.660156 C 25.402344 47.660156 24.632813 47.953125 24.050781 48.535156 L 7.878906 64.707031 C 6.714844 65.871094 6.714844 67.785156 7.878906 68.949219 L 11.050781 72.121094 C 12.214844 73.285156 14.128906 73.285156 15.292969 72.121094 L 31.464844 55.949219 C 32.316406 55.097656 32.539063 53.84375 32.140625 52.773438 L 36.386719 48.527344 C 40.199219 51.335938 44.90625 53 50 53 C 62.691406 53 73 42.691406 73 30 C 73 17.308594 62.691406 7 50 7 Z M 50 9 C 61.609375 9 71 18.390625 71 30 C 71 41.609375 61.609375 51 50 51 C 38.390625 51 29 41.609375 29 30 C 29 18.390625 38.390625 9 50 9 Z M 50 11 C 49.449219 11 49 11.449219 49 12 C 49 12.550781 49.449219 13 50 13 C 50.550781 13 51 12.550781 51 12 C 51 11.449219 50.550781 11 50 11 Z M 45.347656 11.613281 C 45.324219 11.613281 45.300781 11.613281 45.28125 11.613281 C 45.210938 11.621094 45.148438 11.628906 45.082031 11.648438 C 44.546875 11.792969 44.230469 12.339844 44.375 12.875 C 44.519531 13.40625 45.066406 13.722656 45.597656 13.578125 C 46.132813 13.4375 46.449219 12.890625 46.308594 12.355469 C 46.191406 11.921875 45.800781 11.617188 45.347656 11.613281 Z M 54.652344 11.613281 C 54.203125 11.617188 53.808594 11.921875 53.691406 12.355469 C 53.550781 12.890625 53.867188 13.4375 54.402344 13.578125 C 54.933594 13.722656 55.480469 13.40625 55.625 12.875 C 55.769531 12.339844 55.453125 11.792969 54.917969 11.648438 C 54.832031 11.625 54.742188 11.613281 54.652344 11.613281 Z M 40.976563 13.410156 C 40.808594 13.414063 40.644531 13.460938 40.5 13.546875 C 40.269531 13.675781 40.101563 13.894531 40.03125 14.152344 C 39.964844 14.410156 40 14.683594 40.132813 14.910156 C 40.265625 15.140625 40.484375 15.308594 40.742188 15.378906 C 40.996094 15.445313 41.269531 15.410156 41.5 15.277344 C 41.976563 15 42.140625 14.390625 41.863281 13.910156 C 41.683594 13.59375 41.34375 13.402344 40.976563 13.410156 Z M 58.953125 13.414063 C 58.613281 13.429688 58.304688 13.617188 58.132813 13.914063 C 57.855469 14.390625 58.023438 15.003906 58.5 15.28125 C 58.976563 15.554688 59.589844 15.390625 59.863281 14.914063 C 60 14.683594 60.035156 14.410156 59.964844 14.15625 C 59.898438 13.898438 59.730469 13.679688 59.5 13.546875 C 59.335938 13.449219 59.144531 13.40625 58.953125 13.414063 Z M 37.285156 16.269531 C 37.015625 16.269531 36.753906 16.375 36.5625 16.5625 C 36.175781 16.953125 36.175781 17.589844 36.5625 17.980469 C 36.953125 18.367188 37.589844 18.367188 37.980469 17.980469 C 38.367188 17.589844 38.367188 16.953125 37.980469 16.5625 C 37.792969 16.378906 37.546875 16.273438 37.285156 16.269531 Z M 62.742188 16.269531 C 62.472656 16.265625 62.210938 16.371094 62.019531 16.5625 C 61.628906 16.953125 61.628906 17.589844 62.019531 17.980469 C 62.410156 18.367188 63.042969 18.367188 63.433594 17.980469 C 63.824219 17.589844 63.824219 16.953125 63.433594 16.5625 C 63.25 16.378906 63.003906 16.277344 62.742188 16.269531 Z M 65.5625 20 C 65.394531 20.003906 65.230469 20.050781 65.085938 20.136719 C 64.609375 20.410156 64.445313 21.023438 64.71875 21.5 C 64.996094 21.976563 65.609375 22.140625 66.085938 21.863281 C 66.5625 21.589844 66.730469 20.976563 66.453125 20.5 C 66.269531 20.183594 65.929688 19.992188 65.5625 20 Z M 34.363281 20 C 34.027344 20.019531 33.71875 20.207031 33.546875 20.5 C 33.269531 20.976563 33.433594 21.589844 33.910156 21.863281 C 34.390625 22.140625 35 21.976563 35.277344 21.5 C 35.554688 21.023438 35.390625 20.410156 34.910156 20.136719 C 34.746094 20.039063 34.554688 19.992188 34.363281 20 Z M 32.605469 24.34375 C 32.152344 24.347656 31.761719 24.648438 31.644531 25.082031 C 31.503906 25.617188 31.820313 26.164063 32.355469 26.308594 C 32.886719 26.453125 33.433594 26.136719 33.578125 25.601563 C 33.722656 25.066406 33.40625 24.519531 32.871094 24.375 C 32.785156 24.351563 32.695313 24.339844 32.605469 24.34375 Z M 67.394531 24.34375 C 67.371094 24.339844 67.347656 24.34375 67.324219 24.34375 C 67.257813 24.347656 67.191406 24.359375 67.125 24.375 C 66.59375 24.519531 66.277344 25.066406 66.421875 25.601563 C 66.5625 26.136719 67.109375 26.453125 67.644531 26.308594 C 67.902344 26.242188 68.121094 26.074219 68.253906 25.84375 C 68.386719 25.613281 68.421875 25.339844 68.355469 25.082031 C 68.238281 24.648438 67.847656 24.347656 67.394531 24.34375 Z M 32 29 C 31.449219 29 31 29.449219 31 30 C 31 30.550781 31.449219 31 32 31 C 32.550781 31 33 30.550781 33 30 C 33 29.449219 32.550781 29 32 29 Z M 68 29 C 67.449219 29 67 29.449219 67 30 C 67 30.550781 67.449219 31 68 31 C 68.550781 31 69 30.550781 69 30 C 69 29.449219 68.550781 29 68 29 Z M 32.652344 33.660156 C 32.550781 33.65625 32.449219 33.667969 32.355469 33.691406 C 31.820313 33.835938 31.503906 34.382813 31.644531 34.917969 C 31.789063 35.453125 32.335938 35.769531 32.871094 35.625 C 33.40625 35.480469 33.722656 34.933594 33.578125 34.402344 C 33.464844 33.976563 33.089844 33.675781 32.652344 33.660156 Z M 67.375 33.660156 C 66.925781 33.664063 66.535156 33.96875 66.421875 34.402344 C 66.351563 34.660156 66.386719 34.933594 66.519531 35.160156 C 66.652344 35.390625 66.871094 35.558594 67.128906 35.625 C 67.664063 35.769531 68.210938 35.453125 68.355469 34.921875 C 68.496094 34.386719 68.179688 33.839844 67.644531 33.695313 C 67.558594 33.671875 67.46875 33.660156 67.375 33.660156 Z M 34.386719 38 C 34.21875 38.003906 34.058594 38.050781 33.910156 38.132813 C 33.683594 38.265625 33.515625 38.484375 33.445313 38.742188 C 33.375 38.996094 33.410156 39.269531 33.546875 39.5 C 33.675781 39.730469 33.894531 39.898438 34.152344 39.964844 C 34.410156 40.035156 34.683594 40 34.910156 39.863281 C 35.390625 39.589844 35.554688 38.976563 35.277344 38.5 C 35.09375 38.183594 34.753906 37.992188 34.386719 38 Z M 65.542969 38.003906 C 65.199219 38.019531 64.890625 38.207031 64.71875 38.5 C 64.585938 38.730469 64.550781 39.003906 64.621094 39.261719 C 64.691406 39.519531 64.859375 39.738281 65.089844 39.871094 C 65.566406 40.144531 66.175781 39.980469 66.453125 39.5 C 66.730469 39.023438 66.566406 38.414063 66.089844 38.136719 C 65.921875 38.039063 65.730469 37.996094 65.542969 38.003906 Z M 37.285156 41.730469 C 37.015625 41.726563 36.753906 41.832031 36.5625 42.019531 C 36.175781 42.410156 36.175781 43.046875 36.5625 43.4375 C 36.953125 43.824219 37.589844 43.824219 37.980469 43.4375 C 38.367188 43.046875 38.367188 42.410156 37.980469 42.019531 C 37.792969 41.835938 37.546875 41.730469 37.285156 41.730469 Z M 62.742188 41.730469 C 62.472656 41.722656 62.210938 41.828125 62.019531 42.019531 C 61.628906 42.410156 61.628906 43.046875 62.019531 43.4375 C 62.410156 43.824219 63.042969 43.824219 63.433594 43.4375 C 63.824219 43.046875 63.824219 42.410156 63.433594 42.019531 C 63.25 41.835938 63.003906 41.734375 62.742188 41.730469 Z M 58.972656 44.589844 C 58.808594 44.589844 58.644531 44.636719 58.5 44.71875 C 58.019531 44.996094 57.855469 45.609375 58.132813 46.085938 C 58.410156 46.5625 59.019531 46.730469 59.5 46.453125 C 59.726563 46.320313 59.894531 46.101563 59.964844 45.84375 C 60.035156 45.589844 60 45.316406 59.863281 45.085938 C 59.683594 44.769531 59.339844 44.578125 58.972656 44.589844 Z M 40.953125 44.589844 C 40.609375 44.605469 40.300781 44.792969 40.132813 45.089844 C 39.855469 45.566406 40.019531 46.179688 40.5 46.453125 C 40.726563 46.589844 41 46.625 41.257813 46.554688 C 41.515625 46.488281 41.734375 46.320313 41.863281 46.089844 C 42 45.859375 42.035156 45.585938 41.964844 45.332031 C 41.894531 45.074219 41.726563 44.855469 41.5 44.722656 C 41.332031 44.625 41.140625 44.582031 40.953125 44.589844 Z M 32.734375 45.179688 C 33.386719 45.917969 34.082031 46.613281 34.820313 47.265625 L 30.921875 51.164063 L 28.835938 49.078125 Z M 45.332031 46.390625 C 44.882813 46.394531 44.492188 46.695313 44.375 47.128906 C 44.230469 47.664063 44.546875 48.210938 45.082031 48.355469 C 45.617188 48.5 46.164063 48.183594 46.308594 47.648438 C 46.375 47.390625 46.339844 47.117188 46.207031 46.886719 C 46.074219 46.660156 45.855469 46.492188 45.597656 46.421875 C 45.511719 46.398438 45.421875 46.386719 45.332031 46.390625 Z M 54.699219 46.390625 C 54.597656 46.386719 54.496094 46.394531 54.402344 46.421875 C 53.867188 46.566406 53.550781 47.113281 53.691406 47.644531 C 53.835938 48.179688 54.382813 48.496094 54.917969 48.355469 C 55.453125 48.210938 55.769531 47.664063 55.625 47.128906 C 55.511719 46.707031 55.136719 46.40625 54.699219 46.390625 Z M 50 47 C 49.449219 47 49 47.449219 49 48 C 49 48.550781 49.449219 49 50 49 C 50.550781 49 51 48.550781 51 48 C 51 47.449219 50.550781 47 50 47 Z M 26.171875 49.652344 C 26.425781 49.652344 26.675781 49.75 26.875 49.949219 L 30.050781 53.121094 C 30.449219 53.519531 30.449219 54.136719 30.050781 54.535156 L 13.878906 70.707031 C 13.480469 71.105469 12.863281 71.105469 12.464844 70.707031 L 9.292969 67.535156 C 8.894531 67.136719 8.894531 66.519531 9.292969 66.121094 L 11 64.414063 L 13.292969 66.707031 L 14.707031 65.292969 L 12.414063 63 L 14 61.414063 L 16.292969 63.707031 L 17.707031 62.292969 L 15.414063 60 L 17 58.414063 L 19.292969 60.707031 L 20.707031 59.292969 L 18.414063 57 L 20 55.414063 L 22.292969 57.707031 L 23.707031 56.292969 L 21.414063 54 L 23 52.414063 L 25.292969 54.707031 L 26.707031 53.292969 L 24.414063 51 L 25.464844 49.949219 C 25.664063 49.75 25.917969 49.652344 26.171875 49.652344 Z"></path>
        </svg>
        <h3>Find a specialist</h3>
        <p>Search among dozens of the greatest medical specialists.</p>
      </section>
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 100 100"
          style={{ fill: "#000000" }}
        >
          <path d="M 29.355469 17 C 22.543991 17 17 22.543991 17 29.355469 L 17 70.644531 C 17 77.456009 22.543991 83 29.355469 83 L 70.644531 83 C 77.456009 83 83 77.456009 83 70.644531 L 83 29.355469 C 83 22.543991 77.456009 17 70.644531 17 L 29.355469 17 z M 29.355469 19 L 70.644531 19 C 76.375054 19 81 23.624946 81 29.355469 L 81 35.027344 L 49.5 35.027344 A 0.50005 0.50005 0 1 0 49.5 36.027344 L 81 36.027344 L 81 70.644531 C 81 76.375054 76.375054 81 70.644531 81 L 29.355469 81 C 23.624946 81 19 76.375054 19 70.644531 L 19 36.027344 L 28.5 36.027344 A 0.50005 0.50005 0 1 0 28.5 35.027344 L 19 35.027344 L 19 29.355469 C 19 23.624946 23.624946 19 29.355469 19 z M 43.677734 23.027344 C 43.467734 23.027344 43.363281 23.161687 43.363281 23.429688 C 43.363281 23.552688 43.389359 23.653422 43.443359 23.732422 C 43.498359 23.812422 43.575734 23.851562 43.677734 23.851562 L 45.089844 23.851562 L 45.089844 28.658203 C 45.089844 29.687203 44.61125 30.201172 43.65625 30.201172 C 43.20825 30.201172 42.859375 30.08275 42.609375 29.84375 C 42.359375 29.60475 42.234375 29.293156 42.234375 28.910156 C 42.234375 28.700156 42.081344 28.595703 41.777344 28.595703 C 41.625344 28.595703 41.511547 28.626406 41.435547 28.691406 C 41.359547 28.757406 41.322266 28.872062 41.322266 29.039062 C 41.322266 29.633062 41.538656 30.113516 41.972656 30.478516 C 42.406656 30.844516 42.9785 31.027344 43.6875 31.027344 C 44.3825 31.027344 44.942234 30.836031 45.365234 30.457031 C 45.788234 30.077031 46 29.479156 46 28.660156 L 46 23.353516 C 46 23.252516 45.958 23.171281 45.875 23.113281 C 45.792 23.055281 45.695891 23.027344 45.587891 23.027344 L 43.677734 23.027344 z M 48.462891 23.027344 C 48.339891 23.027344 48.232578 23.053422 48.142578 23.107422 C 48.051578 23.162422 48.007812 23.239797 48.007812 23.341797 L 48.007812 28.660156 C 48.007812 29.479156 48.221344 30.077031 48.652344 30.457031 C 49.082344 30.836031 49.656047 31.027344 50.373047 31.027344 C 51.090047 31.027344 51.665609 30.836031 52.099609 30.457031 C 52.533609 30.077031 52.75 29.479156 52.75 28.660156 L 52.75 23.341797 C 52.75 23.239797 52.704281 23.162422 52.613281 23.107422 C 52.523281 23.053422 52.417922 23.027344 52.294922 23.027344 C 51.990922 23.027344 51.837891 23.131797 51.837891 23.341797 L 51.837891 28.660156 C 51.837891 29.175156 51.710031 29.559406 51.457031 29.816406 C 51.204031 30.073406 50.843047 30.201172 50.373047 30.201172 C 49.403047 30.201172 48.917969 29.689156 48.917969 28.660156 L 48.917969 23.341797 C 48.917969 23.239797 48.873203 23.162422 48.783203 23.107422 C 48.693203 23.053422 48.585891 23.027344 48.462891 23.027344 z M 55.455078 23.027344 C 55.332078 23.027344 55.225766 23.053422 55.134766 23.107422 C 55.044766 23.162422 55 23.239797 55 23.341797 L 55 30.636719 C 55 30.737719 55.040047 30.816047 55.123047 30.873047 C 55.205047 30.931047 55.302156 30.960938 55.410156 30.960938 L 58.873047 30.960938 C 58.967047 30.960938 59.040797 30.919937 59.091797 30.835938 C 59.141797 30.752938 59.167969 30.656828 59.167969 30.548828 C 59.167969 30.439828 59.142797 30.344719 59.091797 30.261719 C 59.041797 30.178719 58.967047 30.136719 58.873047 30.136719 L 55.910156 30.136719 L 55.910156 23.341797 C 55.910156 23.239797 55.866391 23.162422 55.775391 23.107422 C 55.685391 23.053422 55.578078 23.027344 55.455078 23.027344 z M 32.5 35.027344 A 0.50005 0.50005 0 1 0 32.5 36.027344 L 33.5 36.027344 A 0.50005 0.50005 0 1 0 33.5 35.027344 L 32.5 35.027344 z M 36.5 35.027344 A 0.50005 0.50005 0 1 0 36.5 36.027344 L 46.5 36.027344 A 0.50005 0.50005 0 1 0 46.5 35.027344 L 36.5 35.027344 z M 22.492188 39.019531 A 0.50005 0.50005 0 0 0 22 39.527344 L 22 69.197266 C 22 74.052495 25.947505 78 30.802734 78 L 69.197266 78 C 74.052495 78 78 74.052495 78 69.197266 L 78 50.527344 A 0.50005 0.50005 0 1 0 77 50.527344 L 77 69.197266 C 77 73.512037 73.512037 77 69.197266 77 L 30.802734 77 C 26.487963 77 23 73.512037 23 69.197266 L 23 39.527344 A 0.50005 0.50005 0 0 0 22.492188 39.019531 z M 77.492188 39.019531 A 0.50005 0.50005 0 0 0 77 39.527344 L 77 41.527344 A 0.50005 0.50005 0 1 0 78 41.527344 L 78 39.527344 A 0.50005 0.50005 0 0 0 77.492188 39.019531 z M 42.183594 42.027344 C 41.787594 42.027344 41.470422 42.238156 41.232422 42.660156 L 38.300781 47.494141 C 37.983781 47.891141 37.826172 48.233438 37.826172 48.523438 C 37.826172 48.761438 37.910984 48.973203 38.083984 49.158203 C 38.255984 49.343203 38.459266 49.4375 38.697266 49.4375 C 39.014266 49.4375 39.251156 49.265875 39.410156 48.921875 L 41.074219 46.068359 L 41.074219 70.115234 C 41.074219 70.696234 41.403453 70.986328 42.064453 70.986328 C 42.723453 70.986328 43.054688 70.696234 43.054688 70.115234 L 43.054688 42.859375 C 43.054688 42.305375 42.763594 42.027344 42.183594 42.027344 z M 49.005859 42.027344 C 48.768859 42.027344 48.549563 42.119687 48.351562 42.304688 C 48.153562 42.489688 48.054688 42.687438 48.054688 42.898438 L 48.054688 48.802734 C 48.054688 49.039734 48.154516 49.245016 48.353516 49.416016 C 48.551516 49.588016 48.782875 49.673828 49.046875 49.673828 C 49.310875 49.673828 49.540281 49.588016 49.738281 49.416016 C 49.936281 49.244016 50.035156 49.039734 50.035156 48.802734 L 50.035156 43.929688 L 62.039062 43.929688 L 62.039062 45.949219 L 49.837891 69.601562 C 49.731891 69.865563 49.679688 70.038188 49.679688 70.117188 C 49.679687 70.381188 49.795297 70.598531 50.029297 70.769531 C 50.262297 70.941531 50.535656 71.027344 50.847656 71.027344 C 51.130656 71.027344 51.362969 70.869734 51.542969 70.552734 L 63.78125 46.701172 C 63.94025 46.463172 64.021484 46.226281 64.021484 45.988281 L 64.021484 42.898438 C 64.021484 42.687437 63.914125 42.489688 63.703125 42.304688 C 63.492125 42.119687 63.281312 42.027344 63.070312 42.027344 L 49.005859 42.027344 z M 77.492188 43.019531 A 0.50005 0.50005 0 0 0 77 43.527344 L 77 47.527344 A 0.50005 0.50005 0 1 0 78 47.527344 L 78 43.527344 A 0.50005 0.50005 0 0 0 77.492188 43.019531 z"></path>
        </svg>
        <h3>Easy to appoint</h3>
        <p>You can make appointments in just few steps.</p>
      </section>
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 100 100"
          style={{ fill: "#000000" }}
        >
          <path d="M 31 18 C 23.82 18 18 23.82 18 31 L 18 70 C 18 77.18 23.82 83 31 83 L 70 83 C 77.179 83 83 77.18 83 70 L 83 31 C 83 23.82 77.18 18 70 18 L 31 18 z M 31 20 L 70 20 C 76.075 20 81 24.925 81 31 L 81 70 C 81 76.075 76.075 81 70 81 L 31 81 C 24.925 81 20 76.075 20 70 L 20 31 C 20 24.925 24.924 20 31 20 z M 33.837891 23 C 27.852891 23 23 27.852891 23 33.837891 L 23 67.162109 C 23 73.147109 27.852891 78 33.837891 78 L 67.162109 78 C 73.147109 78 78 73.148109 78 67.162109 L 78 48.5 C 78 48.224 77.776 48 77.5 48 C 77.224 48 77 48.224 77 48.5 L 77 67.162109 C 77 72.595109 72.595109 77 67.162109 77 L 33.837891 77 C 28.404891 77 24 72.595109 24 67.162109 L 24 33.837891 C 24 28.404891 28.404891 24 33.837891 24 L 67.5 24 C 67.776 24 68 23.776 68 23.5 C 68 23.224 67.776 23 67.5 23 L 33.837891 23 z M 50.5 28 C 38.079507 28 28 38.079516 28 50.5 C 28 62.871677 38.004181 72.907542 50.357422 72.986328 A 0.50005 0.50005 0 0 0 50.359375 72.986328 A 0.50005 0.50005 0 0 0 50.644531 72.986328 C 62.996812 72.906479 73 62.871015 73 50.5 C 73 38.079516 62.920493 28 50.5 28 z M 50 29.050781 L 50 31.5 A 0.50005 0.50005 0 1 0 51 31.5 L 51 29.050781 C 56.620091 29.182059 61.698561 31.442563 65.455078 35.087891 L 63.757812 36.785156 A 0.50005 0.50005 0 1 0 64.464844 37.492188 L 66.138672 35.818359 C 69.695285 39.606073 71.90928 44.655923 71.974609 50.25 L 69.75 50.25 A 0.50005 0.50005 0 1 0 69.75 51.25 L 71.923828 51.25 C 71.730435 56.768735 69.502181 61.755497 65.912109 65.455078 L 64.111328 63.654297 A 0.50005 0.50005 0 1 0 63.404297 64.361328 L 65.181641 66.138672 C 61.451772 69.640975 56.492963 71.820911 51 71.949219 L 51 69.5 A 0.50005 0.50005 0 1 0 50 69.5 L 50 71.949219 C 44.507037 71.820911 39.548228 69.640975 35.818359 66.138672 L 37.595703 64.361328 A 0.50005 0.50005 0 1 0 36.888672 63.654297 L 35.087891 65.455078 C 31.497819 61.755497 29.269565 56.768735 29.076172 51.25 L 31.75 51.25 A 0.50005 0.50005 0 1 0 31.75 50.25 L 29.025391 50.25 C 29.090721 44.655923 31.304715 39.606073 34.861328 35.818359 L 36.535156 37.492188 A 0.50005 0.50005 0 1 0 37.242188 36.785156 L 35.544922 35.087891 C 39.301439 31.442563 44.379909 29.182059 50 29.050781 z M 77.5 36.578125 C 77.224 36.578125 77 36.802125 77 37.078125 L 77 39.078125 C 77 39.354125 77.224 39.578125 77.5 39.578125 C 77.776 39.578125 78 39.355125 78 39.078125 L 78 37.078125 C 78 36.802125 77.776 36.578125 77.5 36.578125 z M 77.5 40.578125 C 77.224 40.578125 77 40.802125 77 41.078125 L 77 45.078125 C 77 45.354125 77.224 45.578125 77.5 45.578125 C 77.776 45.578125 78 45.355125 78 45.078125 L 78 41.078125 C 78 40.802125 77.776 40.578125 77.5 40.578125 z M 50.5 44 C 49.673 44 49 44.673 49 45.5 L 49 48.519531 C 48.90671 48.589596 48.816899 48.664044 48.734375 48.746094 C 48.716121 48.73727 48.702869 48.722427 48.683594 48.714844 L 39.365234 45.068359 C 38.852234 44.867359 38.270359 45.122719 38.068359 45.636719 C 37.867359 46.150719 38.122719 46.730641 38.636719 46.931641 L 47.767578 50.503906 L 33.634766 56.070312 C 33.119766 56.272312 32.867312 56.853187 33.070312 57.367188 C 33.225313 57.760188 33.602 58 34 58 C 34.122 58 34.245234 57.977688 34.365234 57.929688 L 48.744141 52.265625 C 48.823534 52.343612 48.910788 52.413466 49 52.480469 L 49 65.5 C 49 66.327 49.673 67 50.5 67 C 51.327 67 52 66.327 52 65.5 L 52 52.480469 C 52.603967 52.026475 53 51.312378 53 50.5 C 53 49.687622 52.603967 48.973138 52 48.519531 L 52 45.5 C 52 44.673 51.327 44 50.5 44 z M 50.5 45 C 50.776 45 51 45.224 51 45.5 L 51 65.5 C 51 65.776 50.776 66 50.5 66 C 50.224 66 50 65.776 50 65.5 L 50 45.5 C 50 45.224 50.224 45 50.5 45 z"></path>
        </svg>
        <h3>Reminder</h3>
        <p>We will remind you about your appointment by e-mail.</p>
      </section>
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 80 80"
          style={{ fill: "#000000" }}
        >
          <path d="M 40 7 C 21.785156 7 7 21.785156 7 40 C 7 58.214844 21.785156 73 40 73 C 58.214844 73 73 58.214844 73 40 C 73 21.785156 58.214844 7 40 7 Z M 40 9 C 57.132813 9 71 22.867188 71 40 C 71 57.132813 57.132813 71 40 71 C 22.867188 71 9 57.132813 9 40 C 9 22.867188 22.867188 9 40 9 Z M 40 12 C 39.449219 12 39 12.449219 39 13 C 39 13.550781 39.449219 14 40 14 C 40.550781 14 41 13.550781 41 13 C 41 12.449219 40.550781 12 40 12 Z M 45.292969 12.515625 C 44.804688 12.503906 44.382813 12.84375 44.285156 13.324219 C 44.179688 13.863281 44.53125 14.390625 45.074219 14.5 C 45.613281 14.605469 46.140625 14.253906 46.25 13.714844 C 46.355469 13.171875 46.003906 12.644531 45.464844 12.535156 C 45.40625 12.527344 45.351563 12.519531 45.292969 12.515625 Z M 34.738281 12.519531 C 34.671875 12.519531 34.605469 12.523438 34.539063 12.535156 C 33.996094 12.644531 33.644531 13.171875 33.753906 13.714844 C 33.804688 13.972656 33.957031 14.203125 34.179688 14.351563 C 34.398438 14.496094 34.667969 14.550781 34.929688 14.5 C 35.472656 14.390625 35.824219 13.867188 35.714844 13.324219 C 35.621094 12.859375 35.214844 12.523438 34.738281 12.519531 Z M 29.675781 14.054688 C 29.542969 14.054688 29.410156 14.078125 29.285156 14.128906 C 28.773438 14.34375 28.53125 14.925781 28.746094 15.4375 C 28.957031 15.949219 29.539063 16.191406 30.050781 15.980469 C 30.5625 15.765625 30.804688 15.183594 30.59375 14.671875 C 30.4375 14.300781 30.078125 14.058594 29.675781 14.054688 Z M 50.355469 14.054688 C 49.941406 14.046875 49.566406 14.289063 49.40625 14.671875 C 49.195313 15.183594 49.4375 15.765625 49.949219 15.980469 C 50.460938 16.191406 51.042969 15.949219 51.253906 15.4375 C 51.46875 14.925781 51.226563 14.34375 50.714844 14.128906 C 50.601563 14.082031 50.476563 14.058594 50.355469 14.054688 Z M 25.011719 16.546875 C 24.808594 16.546875 24.609375 16.605469 24.441406 16.71875 C 23.984375 17.023438 23.859375 17.644531 24.167969 18.105469 C 24.472656 18.5625 25.09375 18.6875 25.554688 18.378906 C 26.015625 18.074219 26.136719 17.453125 25.832031 16.996094 C 25.648438 16.71875 25.339844 16.550781 25.011719 16.546875 Z M 55.015625 16.546875 C 54.675781 16.542969 54.355469 16.710938 54.167969 16.996094 C 53.859375 17.453125 53.984375 18.074219 54.441406 18.378906 C 54.902344 18.6875 55.523438 18.5625 55.828125 18.105469 C 55.976563 17.886719 56.03125 17.613281 55.980469 17.355469 C 55.929688 17.09375 55.777344 16.863281 55.554688 16.71875 C 55.394531 16.609375 55.210938 16.550781 55.015625 16.546875 Z M 20.921875 19.90625 C 20.652344 19.90625 20.390625 20.011719 20.203125 20.203125 C 19.8125 20.589844 19.8125 21.226563 20.203125 21.613281 C 20.589844 22.003906 21.226563 22.003906 21.613281 21.613281 C 22.003906 21.226563 22.003906 20.589844 21.613281 20.203125 C 21.429688 20.015625 21.183594 19.910156 20.921875 19.90625 Z M 59.105469 19.90625 C 58.835938 19.90625 58.574219 20.011719 58.386719 20.203125 C 57.996094 20.589844 57.996094 21.226563 58.386719 21.613281 C 58.773438 22.003906 59.410156 22.003906 59.796875 21.613281 C 60.1875 21.226563 60.1875 20.589844 59.796875 20.203125 C 59.613281 20.015625 59.367188 19.910156 59.105469 19.90625 Z M 62.460938 24 C 62.257813 23.996094 62.0625 24.054688 61.894531 24.167969 C 61.4375 24.472656 61.3125 25.09375 61.621094 25.550781 C 61.925781 26.011719 62.546875 26.136719 63.003906 25.828125 C 63.464844 25.519531 63.589844 24.902344 63.28125 24.441406 C 63.097656 24.167969 62.789063 24 62.460938 24 Z M 17.566406 24 C 17.226563 23.992188 16.90625 24.160156 16.71875 24.441406 C 16.414063 24.902344 16.535156 25.523438 16.996094 25.828125 C 17.457031 26.136719 18.074219 26.011719 18.382813 25.554688 C 18.6875 25.09375 18.566406 24.472656 18.105469 24.167969 C 17.945313 24.0625 17.761719 24.003906 17.566406 24 Z M 51.519531 28.445313 L 50.8125 29.152344 L 36.921875 43.046875 L 30.140625 36.863281 L 25.597656 42.105469 L 37.234375 52.515625 L 56.414063 33.339844 Z M 64.953125 28.667969 C 64.820313 28.664063 64.6875 28.691406 64.5625 28.742188 C 64.050781 28.953125 63.808594 29.539063 64.019531 30.046875 C 64.234375 30.558594 64.816406 30.800781 65.328125 30.589844 C 65.839844 30.378906 66.082031 29.792969 65.871094 29.28125 C 65.714844 28.914063 65.355469 28.667969 64.953125 28.667969 Z M 15.078125 28.667969 C 14.664063 28.660156 14.289063 28.902344 14.132813 29.285156 C 13.921875 29.796875 14.164063 30.378906 14.671875 30.59375 C 15.183594 30.804688 15.769531 30.5625 15.980469 30.050781 C 16.191406 29.539063 15.949219 28.957031 15.4375 28.746094 C 15.324219 28.695313 15.203125 28.671875 15.078125 28.667969 Z M 51.519531 31.273438 L 53.585938 33.339844 L 37.160156 49.765625 L 28.402344 41.925781 L 30.308594 39.722656 L 36.984375 45.808594 Z M 66.484375 33.734375 C 66.417969 33.730469 66.351563 33.738281 66.285156 33.75 C 65.746094 33.859375 65.394531 34.386719 65.5 34.925781 C 65.609375 35.46875 66.136719 35.820313 66.675781 35.714844 C 67.21875 35.605469 67.570313 35.078125 67.464844 34.535156 C 67.371094 34.070313 66.960938 33.734375 66.484375 33.734375 Z M 13.546875 33.734375 C 13.058594 33.722656 12.636719 34.058594 12.539063 34.535156 C 12.488281 34.796875 12.539063 35.070313 12.6875 35.289063 C 12.835938 35.511719 13.066406 35.664063 13.328125 35.714844 C 13.585938 35.765625 13.855469 35.710938 14.078125 35.566406 C 14.296875 35.417969 14.449219 35.1875 14.5 34.925781 C 14.609375 34.386719 14.257813 33.859375 13.71875 33.75 C 13.660156 33.742188 13.605469 33.734375 13.546875 33.734375 Z M 13 39 C 12.449219 39 12 39.449219 12 40 C 12 40.550781 12.449219 41 13 41 C 13.550781 41 14 40.550781 14 40 C 14 39.449219 13.550781 39 13 39 Z M 67 39 C 66.449219 39 66 39.449219 66 40 C 66 40.550781 66.449219 41 67 41 C 67.550781 41 68 40.550781 68 40 C 68 39.449219 67.550781 39 67 39 Z M 13.523438 44.265625 C 13.457031 44.265625 13.390625 44.273438 13.324219 44.285156 C 12.78125 44.394531 12.429688 44.921875 12.539063 45.464844 C 12.648438 46.003906 13.171875 46.355469 13.714844 46.25 C 14.257813 46.140625 14.609375 45.613281 14.5 45.074219 C 14.40625 44.605469 14 44.269531 13.523438 44.265625 Z M 66.507813 44.265625 C 66.019531 44.253906 65.597656 44.59375 65.5 45.074219 C 65.394531 45.613281 65.746094 46.140625 66.285156 46.25 C 66.828125 46.355469 67.355469 46.003906 67.464844 45.464844 C 67.570313 44.921875 67.21875 44.394531 66.675781 44.285156 C 66.621094 44.277344 66.566406 44.269531 66.507813 44.265625 Z M 64.96875 49.328125 C 64.554688 49.320313 64.179688 49.566406 64.019531 49.949219 C 63.808594 50.457031 64.050781 51.042969 64.5625 51.253906 C 65.074219 51.464844 65.65625 51.222656 65.871094 50.714844 C 66.082031 50.203125 65.839844 49.617188 65.328125 49.40625 C 65.214844 49.359375 65.089844 49.332031 64.96875 49.328125 Z M 15.0625 49.332031 C 14.929688 49.332031 14.796875 49.355469 14.671875 49.40625 C 14.429688 49.507813 14.234375 49.703125 14.132813 49.949219 C 14.03125 50.195313 14.03125 50.46875 14.128906 50.714844 C 14.34375 51.226563 14.925781 51.46875 15.4375 51.253906 C 15.683594 51.15625 15.878906 50.960938 15.980469 50.714844 C 16.082031 50.46875 16.082031 50.195313 15.980469 49.949219 C 15.828125 49.578125 15.464844 49.335938 15.0625 49.332031 Z M 62.46875 54 C 62.128906 53.992188 61.808594 54.160156 61.621094 54.441406 C 61.3125 54.902344 61.4375 55.519531 61.894531 55.828125 C 62.113281 55.976563 62.386719 56.03125 62.644531 55.976563 C 62.90625 55.925781 63.136719 55.773438 63.28125 55.550781 C 63.589844 55.09375 63.464844 54.472656 63.003906 54.167969 C 62.847656 54.058594 62.660156 54 62.46875 54 Z M 17.5625 54 C 17.359375 53.996094 17.164063 54.054688 16.996094 54.167969 C 16.539063 54.476563 16.414063 55.09375 16.71875 55.554688 C 17.027344 56.011719 17.648438 56.136719 18.109375 55.828125 C 18.566406 55.523438 18.691406 54.902344 18.382813 54.441406 C 18.199219 54.167969 17.890625 54.003906 17.5625 54 Z M 20.921875 58.09375 C 20.652344 58.089844 20.390625 58.195313 20.203125 58.386719 C 19.8125 58.773438 19.8125 59.410156 20.203125 59.796875 C 20.589844 60.1875 21.226563 60.1875 21.613281 59.796875 C 22.003906 59.410156 22.003906 58.773438 21.613281 58.386719 C 21.429688 58.199219 21.183594 58.09375 20.921875 58.09375 Z M 59.105469 58.09375 C 58.835938 58.089844 58.574219 58.195313 58.386719 58.386719 C 57.996094 58.773438 57.996094 59.410156 58.386719 59.796875 C 58.773438 60.1875 59.410156 60.1875 59.796875 59.796875 C 60.1875 59.410156 60.1875 58.773438 59.796875 58.386719 C 59.613281 58.199219 59.367188 58.09375 59.105469 58.09375 Z M 25.019531 61.449219 C 24.679688 61.441406 24.359375 61.609375 24.171875 61.890625 C 23.863281 62.351563 23.988281 62.972656 24.449219 63.28125 C 24.90625 63.585938 25.527344 63.460938 25.832031 63.003906 C 26.140625 62.542969 26.015625 61.925781 25.558594 61.617188 C 25.398438 61.511719 25.210938 61.449219 25.019531 61.449219 Z M 55.011719 61.449219 C 54.808594 61.445313 54.613281 61.503906 54.445313 61.613281 C 54.222656 61.761719 54.070313 61.992188 54.019531 62.253906 C 53.96875 62.511719 54.023438 62.785156 54.171875 63.003906 C 54.476563 63.460938 55.097656 63.585938 55.558594 63.28125 C 56.015625 62.972656 56.140625 62.351563 55.832031 61.890625 C 55.652344 61.617188 55.34375 61.449219 55.011719 61.449219 Z M 29.691406 63.941406 C 29.277344 63.933594 28.902344 64.179688 28.746094 64.5625 C 28.535156 65.070313 28.777344 65.65625 29.285156 65.867188 C 29.796875 66.078125 30.382813 65.835938 30.59375 65.328125 C 30.804688 64.816406 30.5625 64.230469 30.050781 64.019531 C 29.9375 63.972656 29.816406 63.945313 29.691406 63.941406 Z M 50.339844 63.941406 C 50.207031 63.941406 50.074219 63.96875 49.953125 64.019531 C 49.707031 64.121094 49.511719 64.316406 49.410156 64.558594 C 49.308594 64.804688 49.308594 65.082031 49.40625 65.328125 C 49.621094 65.835938 50.203125 66.078125 50.714844 65.867188 C 50.960938 65.765625 51.15625 65.570313 51.257813 65.328125 C 51.359375 65.082031 51.359375 64.804688 51.257813 64.5625 C 51.105469 64.1875 50.742188 63.945313 50.339844 63.941406 Z M 34.761719 65.480469 C 34.273438 65.46875 33.847656 65.808594 33.753906 66.285156 C 33.644531 66.828125 33.996094 67.351563 34.539063 67.460938 C 35.082031 67.570313 35.605469 67.21875 35.714844 66.675781 C 35.824219 66.132813 35.472656 65.609375 34.929688 65.5 C 34.875 65.488281 34.816406 65.480469 34.761719 65.480469 Z M 45.269531 65.484375 C 45.203125 65.480469 45.136719 65.488281 45.074219 65.5 C 44.53125 65.609375 44.179688 66.132813 44.285156 66.675781 C 44.339844 66.9375 44.492188 67.164063 44.710938 67.3125 C 44.933594 67.460938 45.203125 67.515625 45.464844 67.464844 C 45.722656 67.410156 45.953125 67.257813 46.101563 67.039063 C 46.246094 66.816406 46.300781 66.546875 46.25 66.285156 C 46.15625 65.820313 45.746094 65.484375 45.269531 65.484375 Z M 40 66 C 39.449219 66 39 66.449219 39 67 C 39 67.550781 39.449219 68 40 68 C 40.550781 68 41 67.550781 41 67 C 41 66.449219 40.550781 66 40 66 Z"></path>
        </svg>
        <h3>Free services</h3>
        <p>Making appointments with us is completely free.</p>
      </section>
    </article>
  );
};

export default AppInfo;
