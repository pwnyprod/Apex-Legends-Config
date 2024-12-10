import fs from 'fs'
import AdmZip from 'adm-zip'

export function createZip(files, outputZipPath) {
  const zip = new AdmZip()
  files.forEach((file) => {
    const fileData = fs.readFileSync(file)
    const fileName = file.split('/').pop()
    zip.addFile(fileName, fileData)
  })
  zip.writeZip(outputZipPath)
}
