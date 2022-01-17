# Tour of Heroes - Nx workspace

Exploring a Nx workspace approach to the tour of heroes sample app using [Nx](https://nx.dev/) to transform it from an Angular CLI workspace to an Nx workspace.

## Setup

1. ``npm install -g nx``
2.  ``npm install``
3.  ``npx nx serve tour-of-heroes`` or ``ng serve``

## Running the tests

1. `` nx e2e tour-of-heroes-e2e`` - screenshots and videos will be accessible in dist/apps/tour-of-heroes/screenshots and dist/apps/tour-of-heroes/videos. 

## Understanding the Nx workspace

Run ``npx nx dep-graph`` to see the dependency graph for your workspace

## Further information

See the [Nx documentation](https://nx.dev/getting-started/intro) for more information.

