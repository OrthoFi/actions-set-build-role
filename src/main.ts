import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const productionRole = core.getInput('production-role', {required: true})
    const devRole = core.getInput('dev-role', {required: true})
    const environmentName = core.getInput('environment-name', {required: true})
    let buildRole
    switch (environmentName) {
      case 'production':
      case 'demo':
      case 'risk':
      case 'lithium':
      case 'hydrogen':
      case 'helium':
      case 'thunder':
        buildRole = productionRole
        break
      default:
        buildRole = devRole
        break
    }
    core.setOutput('build-role', buildRole)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
