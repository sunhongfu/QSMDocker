export const SIEMENS_3T = {
    readout: ['unipolar', 'bipolar'],
    bkg_rm: ['resharp', 'pdf', 'sharp', 'esharp', 'lbv'],
    ph_unwrap: ['prelude', 'bestpath'],
    number_input: {
        r_mask: 1,
        fit_thr: 40,
        bet_thr: 0.4,
        bet_smooth: 2,
        t_svd: 0.1,
        smv_rad: 3,
        tik_reg: 0.003,
        cgs_num: 500,
        lbv_peel: 2,
        lbv_tol: 0.01,
        tv_reg: 0.0005,
        inv_num: 500
    }
}

export const PHILIPS_3T = {
    // index[0] is default option
    readout: ['unipolar', 'bipolar'],
    bkg_rm: ['resharp', 'pdf', 'sharp', 'esharp', 'lbv'],
    ph_unwrap: ['prelude', 'bestpath'],
    number_input: {
        r_mask: 1,
        fit_thr: 20,
        bet_thr: 0.4,
        bet_smooth: 2,
        t_svd: 0.1,
        smv_rad: 3,
        tik_reg: 0.0004,
        cgs_num: 200,
        lbv_peel: 2,
        lbv_tol: 0.01,
        tv_reg: 0.0005,
        inv_num: 500
    }
}