export const clientHeart = (data) => {
    return {
        type: MQ_CLIENT_HEART,
        data
    }
}

export const syncTipState = (data) => {
    return {
        type: MQ_SYNC_TIP_STATE,
        data
    }
}

export const deviceEvent = (data) => {
    return {
        type: MQ_DEVICE_EVENT,
        data
    }
}

export const connectRet = (data) => {
    return {
        type: MQ_CONNECT_RET,
        data
    }
}

export const trainAddImageSingle = (data) => {
    return {
        type: MQ_TRAIN_ADD_IMAGE_SINGLE,
        data
    }
}

export const trainAddImageBatch = (data) => {
    return {
        type: MQ_TRAIN_ADD_IMAGE_BATCH,
        data
    }
}

export const exportResult = (data) => {
    return {
        type: MQ_EXPORT_RESULT,
        data
    }
}

export const importUserExcel = (data) => {
    return {
        type: MQ_IMPORT_USER_EXCEL,
        data 
    }
}

export const uploadSoftware = (data) => {
    return {
        type: MQ_UPLOAD_SOFTWARE,
        data
    }
}

export const importTipStandardLib = (data) => {
    return {
        type: MQ_IMPORT_TIP_STANDARD_LIB,
        data
    }
}

export const importTipCustomLib = (data) => {
    return {
        type: MQ_IMPORT_TIP_CUSTOM_LIB,
        data
    }
}

export const exportTipLib = (data) => {
    return {
        type: MQ_EXPORT_TIP_LIB,
        data
    }
}

export const systemBusyIndex = (data) => {
    return {
        type: MQ_SYSTEM_BUSY_INDEX,
        data
    }
}

export const importTrainStandardLib = (data) => {
    return {
        type: MQ_IMPORT_TRAIN_STANDARD_LIB,
        data
    }
}

export const importTrainCustomLib = (data) => {
    return {
        type: MQ_IMPORT_TRAIN_CUSTOM_LIB,
        data
    }
}

export const changeVmStatus = (data) => {
    return {
        type: MQ_CHANGE_VM_STATUS,
        data
    }
}

export const importTemplate = (data) => {
    return {
        type: MQ_IMPORT_TEMPLATE,
        data
    }
}

export const requestDeviceImage = (data) => {
    return {
        type: MQ_REQUEST_DEVICE_IMAGE,
        data
    }
}




